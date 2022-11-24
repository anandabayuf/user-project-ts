import { Button, notification } from 'antd';
import { useSelector } from 'react-redux';
import NoData from '../../../components/General/NoData';
import UserListTable from '../../../components/User/UserListTable';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailUserModal from '../../../components/User/DetailUserModal';
import { State } from '../../../store';
import MainLayout from '../../../layout/MainLayout';
import CustomTitle from '../../../components/General/CustomTitle';
import CurrentTheme from '../../../styles/index';
import { IUserRecord } from '../../../models/UserRecord';

const UserListPage: React.FC = () => {
    const users = useSelector((state: State) => state.users);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState<IUserRecord>();
    const currentTheme = CurrentTheme();
    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();
    const location = useLocation();

    const handleClickCreate = () => {
        navigate('/user-list/create');
    };

    const handleAfterCreate = () => {
        if (location.state != null) {
            api.success({
                message: location.state.message,
                placement: "top",
                duration: 5,
                style: {
                    backgroundColor: currentTheme.other,
                    color: currentTheme.title,
                    borderRadius: "20px"
                }
            })
            window.history.replaceState({}, document.title);
            location.state = null;
        }
    };

    useEffect(() => {
        handleAfterCreate(); // eslint-disable-next-line
    }, []);

    const showModal = (data: IUserRecord) => {
        setUser({
            showPassword: false,
            ...data,
        });
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleShowPassword = () => {
        if (user?.showPassword !== undefined) {
            setUser({
                ...user,
                showPassword: !user?.showPassword,
            });
        }
    };

    return (
        <MainLayout>
            <div className='flex justify-between items-center mb-10'>
                <CustomTitle title='User List' />
                <Button
                    type="primary"
                    className='shadow-xl rounded-xl'
                    onClick={() => handleClickCreate()}
                >
                    Create User
                </Button>
            </div>
            {users.length > 0 ? (
                <UserListTable
                    users={users}
                    showModal={showModal}
                />
            ) : (
                <NoData />
            )}
            {isModalOpen && user && (
                <DetailUserModal
                    user={user}
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    handleShowPassword={handleShowPassword}
                />
            )}
            {contextHolder}
        </MainLayout>
    );
}

export default UserListPage;