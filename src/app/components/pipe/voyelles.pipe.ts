import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'voyelles'
})
export class VoyellesPipe implements PipeTransform {
	transform(ch: string): any {
		var res = '';
		return (res = ch.replace(/a|e|i|o|u|y/g, '*'));
	}
}
