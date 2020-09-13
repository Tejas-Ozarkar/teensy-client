import { Url } from './url-model';

export class Card extends Url{
    title: string;
    description: string;
    icon: string;

    constructor(){
        super();
        this.title = null;
        this.description = null;
        this.icon = null;
    }
}
