import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <main className="items-center justify-center">
            <Outlet />
        </main>
    );
}

export default AuthLayout;