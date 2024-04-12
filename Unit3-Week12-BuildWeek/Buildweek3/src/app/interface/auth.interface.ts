export interface Auth {
    accessToken: string;
    user: {
        id: number;
        email: string;
    };
}
