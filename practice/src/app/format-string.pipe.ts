import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString',
  standalone: true,
})
export class FormatStringPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toUpperCase() + ' (formatted)' : '';
  }
}
