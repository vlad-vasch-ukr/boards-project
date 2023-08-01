import {Routes, Route} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';
import BoardPage from '../pages/BoardPage/BoardPage.jsx';

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="boards/:id" element={<BoardPage />} />
      </Route>
    </Routes>
  );
}

export default RoutesList;