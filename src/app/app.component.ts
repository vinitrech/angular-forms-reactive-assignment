import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {CustomValidators} from "./customValidators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    statuses: string[] = ['Stable', 'Critical', 'Finished'];
    projectForm!: FormGroup;

    ngOnInit() {
        this.projectForm = new FormGroup({
            'name': new FormControl(null, [Validators.required, CustomValidators.validateName], CustomValidators.validateNameAsync),
            'mail': new FormControl(null, [Validators.required, Validators.email]),
            'status': new FormControl('Stable')
        })
    }

    onSubmit() {
        console.log(this.projectForm);
    }
}
