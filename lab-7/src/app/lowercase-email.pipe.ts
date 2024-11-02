import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name: 'lowercaseEmail',
  standalone:true,

})
export class LowercaseEmailPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.toLowerCase() : value;
  }

}
