import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'components/calculator.component.html',
    styleUrls: ['components/calculator.component.css']
})
export class AppComponent {
    result = 0;
    no1 = "";
    no2 = "";
    title = 'Calculator app - Angular 2';
    onAddClicked(message: string): void {
        this.result = parseInt(this.no1) + parseInt(this.no2);
    }
    onSubClicked(message: string): void {
        this.result = parseInt(this.no1) - parseInt(this.no2);;
    }
}