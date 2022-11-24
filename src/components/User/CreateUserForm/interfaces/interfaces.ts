import {IUser} from "../../../../models/User"

export interface CreateUserFormProps {
	isLoading?: boolean;
	onFinish: (values: IUser) => void;
	onFinishFailed?: (errorInfo: any) => void;
}