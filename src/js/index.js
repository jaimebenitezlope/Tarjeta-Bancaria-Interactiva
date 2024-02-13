import { formElement, nameErrorElement } from './dom';
import { formInitialValues, formValues, formKeys } from './const';

import {
	formatCreditCardNumber,
	validateForm,
	getFieldChanged
} from './functions';

formElement.addEventListener('input', getFieldChanged);

formElement.addEventListener('submit', event => {
	event.preventDefault();
	validateForm();
});
