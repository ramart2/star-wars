import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Home from "./pages/Home";
import Root from './pages/Root';
import Error from './pages/Error';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <MovieDetails /> },
    ],
  },
]);

function App() {



  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <header className="App-header">
       
    //   </header>
    // </div>
  );
}

export default App;
