import { IUserRecord } from '../../../../models/UserRecord';

export interface DetailUserModalProps {
	isModalOpen: boolean;
	user: IUserRecord;
	handleCancel: () => void;
	handleShowPassword: () => void;
}