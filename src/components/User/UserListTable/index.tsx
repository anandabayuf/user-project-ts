import { UserListTableProps } from './interfaces/interfaces'
import { IUser } from '../../../models/User';
import CurrentTheme from '../../../styles/index';
import { Table } from 'react-bootstrap';
import { Button } from 'antd';

const UserListTable: React.FC<UserListTableProps> = ({ users, showModal }) => {
    const currentTheme = CurrentTheme();

    const style = {
        color: currentTheme.text,
        backgroundColor: currentTheme.other,
    }

    return (
        <Table
            className="text-center shadow-md rounded-xl"
            borderless
            style={style}
        >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user: IUser, index: number) => {
                        return (
                            <tr key={index}>
                                <td className='border-none'>{user.username}</td>
                                <td className='border-none'>{user.email}</td>
                                <td className='border-none'>{user.phone}</td>
                                <td className='border-none'>
                                    <Button type='default' shape='round' onClick={() => showModal(user)}>
                                        View
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default UserListTable;
