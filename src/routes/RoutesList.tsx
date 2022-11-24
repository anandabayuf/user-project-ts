import { Navigate } from 'react-router-dom';
import { BASE_PATH } from '../constants/constants';
import CreateUserPage from '../pages/User/CreateUserPage';
import UserListPage from '../pages/User/UserListPage';
import { RouteNames } from './interfaces/enums';
import { IRoute, getPathName } from './interfaces/interfaces';

export const PUBLIC_ROUTES: IRoute[] = [
    {
        path: getPathName(RouteNames.LISTUSER),
        element: <UserListPage />,
    },
    {
        path: getPathName(RouteNames.CREATEUSER),
        element: <CreateUserPage />
    },
    {
        path: "*",
        element: <Navigate to={`${BASE_PATH}/user-list/create`} />
    }
]