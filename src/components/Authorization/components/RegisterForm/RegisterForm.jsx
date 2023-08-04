import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../../../../UI/CustomInput/CustomInput.jsx';

function RegisterForm({ onSubmit }) {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    console.log(register('email'))
    return (
        <div className="register-form">
            <h1 className="authorization-title">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomInput type='email' {...register('email')} />
                <CustomInput {...register('password')} />
                <CustomInput />
                <CustomInput />
            </form>
        </div>
    );
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func
}

RegisterForm.defaultProps = {
    onSubmit: () => {}
}

export default RegisterForm;