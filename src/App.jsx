import {BrowserRouter} from 'react-router-dom';
import RoutesList from './router/RoutesList.jsx';
import 'simplebar-react/dist/simplebar.min.css';
import './App.scss';

function App() {

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-screen bg-gray-100">
        <BrowserRouter>
          <RoutesList />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
