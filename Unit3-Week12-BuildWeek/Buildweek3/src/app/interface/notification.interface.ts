export interface Notification {
    userId: number;
    type: string;
    message: string;
    authorId: number;
    postId: number | null;
    todoId: number | null;
    read: boolean
}
