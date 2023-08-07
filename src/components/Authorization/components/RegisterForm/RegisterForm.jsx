import PropTypes from 'prop-types';
import { useForm, Controller  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from '../../../../UI/CustomInput/CustomInput.jsx';
import Button from '../../../../UI/Button/Button.jsx';
import { registerFields, registerSchema } from '../../helpers/index.js';

function RegisterForm({ onSubmit }) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(registerSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {
                registerFields.map(({ name, placeholder, type }) => (
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput
                                type={type}
                                placeholder={placeholder}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                withError
                                error={errors[name]?.message}
                            />
                        )}
                        name={name}
                        key={name}
                    />
                ))
            }
            <Button type="submit">Register</Button>
        </form>
    );
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func
}

RegisterForm.defaultProps = {
    onSubmit: () => {}
}

export default RegisterForm;