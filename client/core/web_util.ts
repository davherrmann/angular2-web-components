import {Control} from 'angular2/angular2';
import {Headers} from 'angular2/http';

const EMAIL_REG = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


export function validateEmail(control: Control) {    
    return EMAIL_REG.test(control.value) ? null : {validEmail: true};
}

export const OPTS_REQ_JSON = {
	headers: new Headers({
		'Content-Type': 'application/json'
	})
};
