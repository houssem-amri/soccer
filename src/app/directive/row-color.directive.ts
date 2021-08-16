import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appRowColor]'
})
export class RowColorDirective {
	constructor(private el: ElementRef) {}
	@HostListener('mouseenter')
	onMouseEnter() {
		this.changeColor('green');
	}
	@HostListener('mouseleave')
	onMouseLeave() {
		this.changeColor(null);
	}
	changeColor(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
