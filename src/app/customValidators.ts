import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators{
    static validateName(control: FormControl): { [s: string]: boolean } | null {
        if (control.value === 'Test1') {
            return {'forbiddenName': true};
        } else {
            return null;
        }
    }

    static validateNameAsync(control: AbstractControl): Promise<any> | Observable<any> {
        return new Promise<any>((resolve) => {
            setTimeout(() => {
                if (control.value === 'Test2') {
                    resolve({'forbiddenName': true});
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
}
