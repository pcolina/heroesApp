import { AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { forbidden_words } from '../constants/forbiddenWords';


export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d.*[^\da-zA-Z])[A-Za-z\d@$!%*?&._-]{8,}$/;


export const forbiddenWordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const forbiddenWords: string[] = forbidden_words;
    const value: string = control.value.trim().toLowerCase();
    const isForbidden = forbiddenWords.some(word => value.includes(word.toLowerCase()));

    if (isForbidden) {
        return {
            forbidden: true,
        };
    }

    return null;
}

export const isField1EqualToField2: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const field1Value = control.get('name')?.value;
    const field2Value = control.get('pass')?.value;

    if (field1Value !== null && field2Value !== null && field1Value === field2Value) {
        return { equal: true };
    }

    return null;
};

