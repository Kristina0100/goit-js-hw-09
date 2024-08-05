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

    Object.keys(formData).forEach(key => {
        if (feedbackFormEl.elements[key]) {
            feedbackFormEl.elements[key].value = formData[key];
        };
    });
};

fillFormFields();

const onFormFieldInput = event => {

    const { name, value } = event.target;
    formData[name] = value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    };

    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    formData = {
        email: '',
        message: '',
    };
    event.target.reset();
};

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);