import { formInitialValues, formValues, formKeys } from './const';

const formatCreditCardNumber = cardNumber => {
	const formattedCreditCardNumber = cardNumber.match(/.{1,4}/g);

	return formattedCreditCardNumber.join(' ');
};

const validateForm = () => {
	formKeys.forEach(key => {
		const errorElement = document.getElementById(`${key}-error`);
		if (!formValues[key]) {
			errorElement.classList.remove('hide');
		} else {
			errorElement.classList.add('hide');
		}
	});
};

const getFieldChanged = event => {
	const cardElement = document.getElementById(`card-${event.target.id}`);
	const value = event.target.value;
	formValues[event.target.id] = value;
	if (value) {
		if (event.target.id === 'number') {
			cardElement.textContent = formatCreditCardNumber(value);
		} else {
			cardElement.textContent = value;
		}
	} else {
		cardElement.textContent = formInitialValues[event.target.id];
	}
};
export { formatCreditCardNumber, validateForm, getFieldChanged };
