import {Component} from '@angular/core';
import {BreadcrumbService} from '../../breadcrumb.service';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'UI Kit' },
            { label: 'Form Layout', routerLink: ['/uikit/formlayout'] }
        ]);
    }

    selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;
}
