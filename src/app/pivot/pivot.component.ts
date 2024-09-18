import { Pivot } from "@dhx/trial-pivot";
import { getData } from "./data";

import {
	Component,
	ElementRef,
	OnInit,
	OnDestroy,
	ViewChild,
	ViewEncapsulation,
} from "@angular/core";

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: "pivot",
	styleUrls: ["./pivot.component.css"],
	template: `<div #container class="widget"></div>`,
})

export class PivotComponent implements OnInit, OnDestroy {
	@ViewChild("container", { static: true }) pivot_container!: ElementRef;

	private _table!: Pivot;

	ngOnInit() {
		const { dataset, fields } = getData();
		this._table = new Pivot(this.pivot_container.nativeElement, {
			fields,
            data: dataset,
            headerShape: {
                collapsible: true
            },
            tableShape: {
                tree: true,
				/* темплейт бросает ошибку!!! */
                //templates: ["profit", "sales"].reduce((acc, field) => (acc[field] = v => (v ? Math.ceil(v) : ""), acc), {})
            },
            columnShape: {
				/* этот код бросает ошибку с типизацией!!! */
                /*autoWidth: {
                    columns: {
                        type: true,
                        title: true
                    },
                    firstOnly: false,
                },*/
            },
            config: {
                rows: ["state", "product_type"],
                columns: ["product_line", "type"],
                values: [
                    {
                        field: "profit",
                        method: "sum"
                    },
                    {
                        field: "sales",
                        method: "sum"
                    },
                    {
                        field: "date",
                        method: "min"
                    }
                ]
            }
		});
	}

	ngOnDestroy(): void {
		this._table.destructor();
	}
}
