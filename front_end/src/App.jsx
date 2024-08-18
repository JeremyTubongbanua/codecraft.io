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
import AdvancedPython from './features/courses/AdvancedPython';
import AdvancedJavaScript from './features/courses/AdvancedjavaScript';
import Advancedc from './features/courses/Advancedc';

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
          },
          {
            path: 'c',
            element: <C />,
          },
          {
            path: 'AdvancedPython',
            element: <AdvancedPython />,
          },
          {
            path: 'advancedjavascript',
            element: <AdvancedJavaScript />,
          },
          {
            path: 'advancedc',
            element: <Advancedc />,
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
