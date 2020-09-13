import { Card } from './card.model';
import { Url } from './url-model';

export class CardResponse extends Card {
    groupid: number;
    grouptitle: string;
    groupdescription: string;
}
