import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interface/user.interface';
import { Post } from 'src/app/interface/post.interface';
import { NotificationsService } from 'src/app/services/notifications.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
    items: string[] = [];
    users!: User[];

    constructor(
        config: NgbModalConfig,
        private modalService: NgbModal,
        private postSrv: PostsService,
        private cdr: ChangeDetectorRef,
        private usersSrv: UsersService,
        private notifSrv: NotificationsService,
        private authSrv: AuthService,
        private router: Router
    ) {
        // customize default values of modals used by this component tree
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
        console.log('ngOnInit activated');

        this.usersSrv.getUsers().subscribe((users) => {
            this.users = users;
            this.items = users.map((user) => user.username);
            console.log('items[]:', this.items);
            this.cdr.detectChanges();
        });
    }

    async processPostContent(
        content: NgForm['value']
    ): Promise<{ processedContent: string; originalContent: NgForm['value'] }> {
        console.log('Processing post content...');

        const processedContent = content.body;

        console.log('Processed content:', processedContent);
        return { processedContent, originalContent: content };
    }

    extractMentions(content: string): string[] {
        const mentionRegex = /@([\w.]+)\b/g;
        let match;
        const mentions = [];
        console.log('Content:', content);
        while ((match = mentionRegex.exec(content)) !== null) {
            console.log('Match:', match);
            mentions.push(match[1]);
        }
        console.log('Mentions extracted:', mentions);
        return mentions;
    }

    async getUserIdByUsername(username: string): Promise<number | null> {
        console.log('Getting user ID for username:', username);

        const user = await this.usersSrv
            .getUserByUsername(username)
            .toPromise();
        const userId = user ? user.id : null;

        console.log('User ID:', userId);
        return userId;
    }

    async getTaggedUsers(mentions: string[]): Promise<User[]> {
        console.log('Getting tagged users...');

        const taggedUsers: User[] = [];
        for (const mention of mentions) {
            const user = await this.usersSrv
                .getUserByUsername(mention)
                .toPromise();
            if (user) {
                taggedUsers.push(user);
            }
        }

        console.log('Tagged users:', taggedUsers);
        return taggedUsers;
    }

    async notifyTaggedUsers(taggedUsers: User[], newPost: Post): Promise<void> {
        console.log('Notifying tagged users...');

        const authorId = this.authSrv.getCurrentUserId();
        console.log('USER ID CURRENT :', authorId);
        if (authorId === null) {
            console.error('Author ID could not be retrieved.');
            return;
        }

        const notifications = taggedUsers.map((user) => ({
            userId: user.id,
            type: 'mention',
            message: `You were mentioned`,
            authorId: authorId,
            postId: newPost.id,
            todoId: null,
            read: false,
        }));

        await Promise.all(
            notifications.map((notification) =>
                this.notifSrv.addNotification(notification).toPromise()
            )
        );

        console.log('Tagged users notified.');
    }
    open(content: any) {
        this.modalService.open(content);
    }

    async save(form: NgForm) {
        const { processedContent, originalContent } =
            await this.processPostContent(form.value);
        const mentions = this.extractMentions(processedContent);
        const taggedUsers = await this.getTaggedUsers(mentions);

        const newPost: Post = {
            userId: this.authSrv.getCurrentUserId() || 0,
            id: 0,
            title: originalContent.title,
            body: processedContent,
            date: new Date().toISOString(),
        };

        this.postSrv.newPost(newPost).subscribe((createdPost: Post) => {
            console.log('New post created:', createdPost);
            this.notifyTaggedUsers(taggedUsers, createdPost).then(() => {
                this.router
                    .navigateByUrl('/', { skipLocationChange: true })
                    .then(() => {
                        this.router.navigate(['/browse']);
                    });
            });
        });
    }
}
