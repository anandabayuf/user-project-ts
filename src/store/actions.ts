import { IUser } from "../models/User"

export const addUser = (user: IUser) => {
	return {
		type: 'ADD_USER',
		payload: user,
	};
};

export const switchToDark = () => {
	return {
		type: "SWITCH_TO_DARK",
	}
}

export const switchToLight= () => {
	return {
		type: "SWITCH_TO_LIGHT",
	}
}
