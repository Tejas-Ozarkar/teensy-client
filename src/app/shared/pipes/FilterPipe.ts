import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        console.log(term);
        if (term) {
            return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(term.toLowerCase()) !== -1);
        }
        return items;
    }
}
