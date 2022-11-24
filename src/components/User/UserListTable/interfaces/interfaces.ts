import {IUser} from "../../../../models/User";
import { IUserRecord } from '../../../../models/UserRecord';

export interface UserListTableProps {
	users: IUser[];
	showModal: (record: IUserRecord) => void;
}