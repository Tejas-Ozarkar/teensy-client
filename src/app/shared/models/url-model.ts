export class Url{
    shorturl: string;
    longurl?: string;
    expirydate: string;

    constructor(){
        this.shorturl = null;
        this.longurl = null;
        this.expirydate = null;
    }
}
