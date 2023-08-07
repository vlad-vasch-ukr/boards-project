import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';
import BoardPage from '../pages/BoardPage/BoardPage.jsx';
import Authorization from '../components/Authorization/Authorization.jsx';
import AuthLayout from '../layouts/AuthLayout/AuthLayout.jsx';

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="boards/:id" element={<BoardPage />} />
      </Route>
      <Route element={<AuthLayout />} >
          <Route path="/register" element={<Authorization action="register" />} />
          <Route path="/login" element={<Authorization action="login" />} />
      </Route>
    </Routes>
  );
}

export default RoutesList;