import { useRoutes } from 'react-router-dom'
import ProductList from '~/pages/ProductList'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import RegisterLayout from '~/layouts/RegisterLayout'

export default function useRoutesElement() {
    return useRoutes([
        {
            path: '/',
            element: <ProductList />,
        },
        {
            path: '/register',
            element: (
                <RegisterLayout>
                    <Register />
                </RegisterLayout>
            ),
        },
        {
            path: '/login',
            element: (
                <RegisterLayout>
                    <Login />
                </RegisterLayout>
            ),
        },
    ])
}
