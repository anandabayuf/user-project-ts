import { IUser } from "../models/User";
import { IAction } from "./interfaces/interfaces";
import { ThemeModeNames } from '../models/Theme';

export const usersReducer = (state: IUser[] | [] = [], action: IAction) => {
	switch (action.type) {
		case 'ADD_USER':
			return [...state, action.payload];
		default:
			return state;
	}
};

export const themeReducer = (state: ThemeModeNames = ThemeModeNames.LIGHT, action: IAction) => {
	switch(action.type){
		case "SWITCH_TO_DARK":
			return ThemeModeNames.DARK;
		case "SWITCH_TO_LIGHT":
			return ThemeModeNames.LIGHT;
		default:
			return state;
	}
} 
