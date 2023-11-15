import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home'
import Shop from '../Shop/Shop'
import ErrorPage from '../ErrorPage/ErrorPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: "/shop",
            element: <Shop />,
            errorElement: <ErrorPage />
        }
    ]);
    return <RouterProvider router={router} />;
};
export default Router;