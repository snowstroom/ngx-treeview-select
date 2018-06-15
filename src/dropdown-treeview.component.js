import { Component, EventEmitter, Input, Output, ViewChild, TemplateRef } from '@angular/core';
import { TreeviewI18n } from './treeview-i18n';
import { TreeviewItem } from './treeview-item';
import { TreeviewConfig } from './treeview-config';
import { TreeviewComponent } from './treeview.component';
import { DropdownDirective } from './dropdown.directive';
var DropdownTreeviewComponent = /** @class */ (function () {
    function DropdownTreeviewComponent(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.buttonClass = 'btn-outline-secondary';
        this.selectedChange = new EventEmitter(true);
        this.filterChange = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.itemWasAdded = new EventEmitter();
        this.config = this.defaultConfig;
    }
    DropdownTreeviewComponent.prototype.getText = function () {
        if (!this.config.hasCheckbox) {
            if (this._currentSelected) {
                return this._currentSelected.text;
            }
            else {
                return 'Element not select';
            }
        }
        else {
            return this.i18n.getText(this.treeviewComponent.selection);
        }
    };
    DropdownTreeviewComponent.prototype.onSelectedChange = function (values) {
        this.selectedChange.emit(values);
    };
    DropdownTreeviewComponent.prototype.onFilterChange = function (text) {
        this.filterChange.emit(text);
    };
    DropdownTreeviewComponent.prototype.onAddItem = function (e) {
        this.itemWasAdded.emit(e);
    };
    DropdownTreeviewComponent.prototype.onSelectItem = function (item) {
        if (!this.config.hasCheckbox) {
            this._currentSelected = item;
        }
        this.selectItem.emit(item);
    };
    DropdownTreeviewComponent.prototype.addNewRootItem = function () {
        var item = new TreeviewItem({
            isEdit: true,
            text: '',
            value: ''
        });
        this.items.push(item);
        this.onAddItem({
            parent: null,
            added: item
        });
    };
    DropdownTreeviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropdown-treeview',
                    template: "\n      <div class=\"dropdown\" ngxDropdown>\n        <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\n          {{getText()}}\n        </button>\n        <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\n          <div class=\"dropdown-container\">\n            <ngx-treeview [config]=\"config\"\n              [headerTemplate]=\"headerTemplate\"\n              [items]=\"items\"\n              [itemTemplate]=\"itemTemplate\"\n              (selectedChange)=\"onSelectedChange($event)\"\n              (addNewItem)=\"onAddItem($event)\"\n              (selectItem)=\"onSelectItem($event)\"\n              (filterChange)=\"onFilterChange($event)\">\n            </ngx-treeview>\n            <i *ngIf=\"config.hasAdd\"\n              (click)=\"addNewRootItem()\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </div>\n    ",
                    styles: ["\n      .dropdown {\n        width: 100%;\n        display: inline-block;\n      }\n\n      .dropdown button {\n        width: 100%;\n        margin-right: .9rem;\n        text-align: left;\n      }\n\n      .dropdown button::after {\n        position: absolute;\n        right: .6rem;\n        margin-top: .6rem;\n      }\n\n      .dropdown .dropdown-menu .dropdown-container {\n        padding: 0 .6rem;\n      }\n    "]
                },] },
    ];
    /** @nocollapse */
    DropdownTreeviewComponent.ctorParameters = function () { return [
        { type: TreeviewI18n },
        { type: TreeviewConfig }
    ]; };
    DropdownTreeviewComponent.propDecorators = {
        buttonClass: [{ type: Input }],
        headerTemplate: [{ type: Input }],
        itemTemplate: [{ type: Input }],
        items: [{ type: Input }],
        config: [{ type: Input }],
        selectedChange: [{ type: Output }],
        filterChange: [{ type: Output }],
        selectItem: [{ type: Output }],
        itemWasAdded: [{ type: Output }],
        treeviewComponent: [{ type: ViewChild, args: [TreeviewComponent,] }],
        dropdownDirective: [{ type: ViewChild, args: [DropdownDirective,] }]
    };
    return DropdownTreeviewComponent;
}());
export { DropdownTreeviewComponent };
//# sourceMappingURL=dropdown-treeview.component.js.map