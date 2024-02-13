import { formElement } from './dom';
import { validateForm, getFieldChanged } from './functions';

formElement.addEventListener('input', getFieldChanged);

formElement.addEventListener('submit', event => {
	event.preventDefault();
	validateForm();
});
