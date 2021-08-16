import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reserve'
})
export class PipePipe implements PipeTransform {
	transform(Ch: string): any {
		var R = '';
		for (let i = 0; i < Ch.length; i++) {
			R = Ch[i] + R;
		}
		return R;
	}
}
