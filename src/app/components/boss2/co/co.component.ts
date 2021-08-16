import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Item } from '../ad-item';
import { Co1Component } from '../co1/co1.component';
import { Co2Component } from '../co2/co2.component';
import { ItemComponent } from '../itemComponent';
import { AnchorDirective } from '../anchor.directive';
import { MatchService } from 'src/app/service/match.service';
import { BossService } from '../boss.service';
@Component({
	selector: 'app-co',
	templateUrl: './co.component.html',
	styleUrls: [ './co.component.css' ]
})
export class CoComponent implements OnInit {
	@ViewChild(AnchorDirective, { static: true })
	anchor: AnchorDirective;

	items: { [propName: string]: Item };
	match: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private vcRef: ViewContainerRef,
		private BossService: BossService
	) {}
	ngOnInit() {}

	load(key: string) {
		this.items = this.BossService.getItem();
		console.log(this.items);
		const item = this.items && this.items[key];
		if (item) {
			this._load(item);
		}
	}

	unload() {
		// const viewContainerRef = this.anchor.viewContainerRef;
		// viewContainerRef.clear();

		this.vcRef.clear();
	}

	private _load(item: Item) {
		console.log('here item', item);

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
		const componentFactory2 = this.componentFactoryResolver.resolveComponentFactory(item.component2);
		// const componentRef = this.anchor.viewContainerRef.createComponent(componentFactory);
		const componentRef = this.vcRef.createComponent(componentFactory);
		(<ItemComponent>componentRef.instance).data = item.data.name;
		const componentRef2 = this.vcRef.createComponent(componentFactory2);
		(<ItemComponent>componentRef2.instance).data = item.data.name;
		console.log('here data ', (<ItemComponent>componentRef.instance).data);
	}
}

// class Item {
// 	constructor(public component: Type<any>, public component2: Type<any>, public data: any) {}
// }
