import { RouteNames } from "./enums";
import { BASE_PATH } from "../../constants/constants";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export function getPathName(route: RouteNames){
    switch (route){
        case RouteNames.LISTUSER:
            return `${BASE_PATH}/user-list`
        case RouteNames.CREATEUSER:
            return `${BASE_PATH}/user-list/create`;
        default:
            return BASE_PATH;
    }
}