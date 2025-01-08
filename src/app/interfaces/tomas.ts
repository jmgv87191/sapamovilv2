export interface Login{
    email: string;
    password: string;
}

export interface ResponseLogin{
    status: string;
    token: any;
}

export interface User {

    "id": number,
    "user": string,
    "email": string


}
