import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: any, toUpper : boolean = false): any {
        console.log({value})
        return(toUpper) ? value.toUpperCase() : value.toLowerCase();
    }
}