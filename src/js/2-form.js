const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: '',
};

const fillFormFields = () => {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
        return;
    };

    formData = formDataFromLS;

    for (const key in formDataFromLS) {
        if (formDataFromLS.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = formDataFromLS[key];
        };
    };
}

const onFormFieldInput = event => {

    const fieldValue = event.target.value.trim();
    const fieldName = event.target.name;
    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData = {
            email: '',
            message: '',
        };
        event.target.reset();
    };
};

fillFormFields();

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);