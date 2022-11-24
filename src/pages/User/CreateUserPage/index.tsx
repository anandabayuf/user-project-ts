import { message } from 'antd';
import { useState } from 'react';
import CreateUserCardForm from '../../../components/User/CreateUserCard';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/actions';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../models/User';
import MainLayout from '../../../layout/MainLayout';

const CreateUserPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values: IUser) => {
        setIsLoading(true);

        setTimeout(() => {
            dispatch(addUser(values));
            setIsLoading(false);
            navigate('/user-list', {
                state: {
                    message: 'Successfully create user',
                },
            });
        }, 1000);
    };

    const onFinishFailed = (errorInfo: any) => {
        message.warning('Please fill in all fields', 5);
    };

    return (
        <MainLayout>
            <CreateUserCardForm
                isLoading={isLoading}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            />
        </MainLayout>
    );
}

export default CreateUserPage;