import { OnChanges, ElementRef } from '@angular/core';
export declare class NgCytoscapeComponent implements OnChanges {
    private el;
    elements: any;
    style: any;
    layout: any;
    zoom: any;
    constructor(el: ElementRef);
    ngOnChanges(): any;
    render(): void;
}
