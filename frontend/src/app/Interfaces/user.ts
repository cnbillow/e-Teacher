export interface IUser {
    id: number,
    name: string,
    email: string,
    email_verified_at: boolean,
    type: string,
    remember_token: string,
    created_at: Date,
    updated_at: Date
}