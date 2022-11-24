import { Card } from 'antd';
import CustomTitle from '../../General/CustomTitle';
import CreateUserForm from '../CreateUserForm';
import { CreateUserCardProps } from './interfaces/interafaces';
import CurrentTheme from '../../../styles/index';

const CreateUserCardForm: React.FC<CreateUserCardProps> = ({ isLoading, onFinish, onFinishFailed }) => {
    const currentTheme = CurrentTheme();

    const style = {
        backgroundColor: currentTheme.other,
    }

    return (
        <div className='flex justify-center'>
            <Card
                title={
                    <CustomTitle title='Create User' />
                }
                bordered={false}
                className={`w-[600px] shadow-2xl rounded-[20px] p-[10px]`}
                style={style}
            >
                <CreateUserForm
                    isLoading={isLoading}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                />
            </Card>
        </div>
    );
}

export default CreateUserCardForm;