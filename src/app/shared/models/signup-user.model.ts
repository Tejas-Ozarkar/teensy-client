import { User } from './user.model';

export class SignupUser extends User{
    firstname: string;
    lastname: string;
    email: string;
    username: string;

    constructor(){
        super();
    }
}
