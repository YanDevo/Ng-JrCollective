import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {

nameFormModel: {} = {
    fullName: "Johnson Mitchel"
}


    constructor() {}

    ngOnInit(): void {

    }
}