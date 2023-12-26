import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
    transform(value: any, canFly : boolean ): any {
        return(value) ? 'Vuela' : 'No vuela'
    }
}