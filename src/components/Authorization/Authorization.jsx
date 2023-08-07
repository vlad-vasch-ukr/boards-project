import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';
import SignInForm from './components/SignInForm/SignInForm.jsx';
import './Authorization.scss';

function Authorization({ action }) {
    return (
        <div className="authorization">
            <div className="authorization__wrapp">
                <h1 className="authorization__title">
                    { action === 'register' ? 'Register' : 'Sign in' }
                </h1>
                {
                    action === 'register' ? <RegisterForm /> : <SignInForm />
                }
            </div>
            <div className="authorization__message">
                {
                    action === 'register' ?
                        <p>Already have an account? <NavLink to="/login" className="authorization__link">Sign in</NavLink></p> :
                        <p>First time here? <NavLink to="/register" className="authorization__link">Create an account.</NavLink></p>
                }
            </div>
        </div>
    );
}

Authorization.propTypes = {
    action: PropTypes.oneOf(['register', 'login'])
}

Authorization.defaultProps = {
    action: 'register'
}

export default Authorization;