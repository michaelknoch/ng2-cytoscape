"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgCytoscape = (function () {
    function NgCytoscape(el) {
        this.el = el;
        this.layout = this.layout || {
            name: 'grid',
            directed: true,
            padding: 0
        };
        this.zoom = this.zoom || {
            min: 0.1,
            max: 1.5
        };
        this.style = this.style || cytoscape.stylesheet()
            .selector('node')
            .css({
            'content': 'data(name)',
            'shape': 'rectangle',
            'text-valign': 'center',
            'background-color': 'data(faveColor)',
            'width': '200px',
            'height': '100px',
            'color': 'black'
        })
            .selector(':selected')
            .css({
            'border-width': 3,
            'border-color': '#333'
        })
            .selector('edge')
            .css({
            'label': 'data(label)',
            'color': 'black',
            'curve-style': 'bezier',
            'opacity': 0.666,
            'width': 'mapData(strength, 70, 100, 2, 6)',
            'target-arrow-shape': 'triangle',
            'line-color': 'data(faveColor)',
            'source-arrow-color': 'data(faveColor)',
            'target-arrow-color': 'data(faveColor)'
        })
            .selector('edge.questionable')
            .css({
            'line-style': 'dotted',
            'target-arrow-shape': 'diamond'
        })
            .selector('.faded')
            .css({
            'opacity': 0.25,
            'text-opacity': 0
        });
    }
    NgCytoscape.prototype.ngOnChanges = function () {
        this.render();
    };
    NgCytoscape.prototype.render = function () {
        jQuery(this.el.nativeElement).cytoscape({
            layout: this.layout,
            minZoom: this.zoom.min,
            maxZoom: this.zoom.max,
            style: this.style,
            elements: this.elements,
        });
    };
    return NgCytoscape;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgCytoscape.prototype, "elements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgCytoscape.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgCytoscape.prototype, "layout", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NgCytoscape.prototype, "zoom", void 0);
NgCytoscape = __decorate([
    core_1.Component({
        selector: 'ng2-cytoscape',
        template: '<div id="cy"></div>',
        styles: ["#cy {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n    }"]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NgCytoscape);
exports.NgCytoscape = NgCytoscape;
//# sourceMappingURL=ng2-cytoscape.js.map