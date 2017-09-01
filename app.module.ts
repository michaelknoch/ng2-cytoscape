import {NgModule} from '@angular/core';
import {NgCytoscapeComponent} from './ng2-cytoscape';

@NgModule({
    declarations: [
        NgCytoscapeComponent,
    ],
    exports: [NgCytoscapeComponent]
})
export class NgCytoscapeModule {
}
