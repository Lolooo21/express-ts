
export type CreateUser = {
    username: string,
    email?: string,
    isAdmin?: boolean,
};

export type UpdateUser = {
    username?: string,
    email?: string,
    isAdmin?: boolean,
};