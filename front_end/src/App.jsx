import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Courses from './features/courses/Courses';
import About from './features/about/About';
import Login from './features/login/Login';
import Coding, { action as codingAction } from './features/coding/Coding';
import Error from './ui/Error';
import Python from './features/courses/Python';
import JavaScript from './features/courses/JavaScript';
import C from './features/courses/C';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <Courses />,
        children: [
          {
            path: 'python',
            element: <Python />,
            action: codingAction,
          },
          {
            path: 'javascript',
            element: <JavaScript />,
            action: codingAction,
          },
          {
            path: 'c',
            element: <C />,
            action: codingAction,
          },
        ],
      },
      {
        path: '/coding',
        element: <Coding />,
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
