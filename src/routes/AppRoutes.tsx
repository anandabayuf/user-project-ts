import { Route, Routes } from "react-router-dom"
import { PUBLIC_ROUTES } from "./RoutesList";
import { IRoute } from './interfaces/interfaces';

const AppRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((route: IRoute, index: number) => (
                    <Route key={index} {...route} />
                ))}
            </Routes>
        </>
    );
};

export default AppRoutes;