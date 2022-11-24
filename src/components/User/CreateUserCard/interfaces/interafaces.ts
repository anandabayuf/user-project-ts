import { IUser } from "../../../../models/User";

export interface CreateUserCardProps {
	isLoading?: boolean;
	onFinish: (values: IUser) => void;
	onFinishFailed?: (errorInfo: any) => void;
}