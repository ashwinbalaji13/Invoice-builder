export class User {
    _id:String;
    email:String;
    password:String;
}
export class LoginRep{
    success:string;
    token:string
}
export interface Logout{
    success:string;
}