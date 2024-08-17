import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Courses from './features/courses/Courses';
import About from './features/about/About';
import Login from './features/login/Login';
import Coding from './features/coding/Coding';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/coding',
        element: <Coding />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
