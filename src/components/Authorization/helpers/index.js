import * as yup from 'yup';

export const registerFields = [
    {
        name: 'name',
        placeholder: 'Enter name',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'Enter your email',
        type: 'email'
    },
    {
        name: 'password',
        placeholder: 'Enter password',
        type: 'text'
    },
    {
        name: 'confirmPassword',
        placeholder: 'Confirm password',
        type: 'text'
    }
];

export const registerSchema = yup.object().shape({
    name: yup.string().required('This field is required').min(3, 'First name must be at least 3 characters'),
    email: yup.string().required('This field is required').email('Email must be a valid'),
    password: yup.string().required('This field is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: yup.string().required('This field is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
});
