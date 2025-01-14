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

export interface Tomas{
    id:         number;
    user_id:    number;
    cveusu:     string;
    alias:      string;
}

export interface AgregarToma{
    id?: number;
    cveusu: string;
    alias: string;
}
