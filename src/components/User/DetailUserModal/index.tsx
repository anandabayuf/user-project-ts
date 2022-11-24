import { Typography, Tooltip, Button } from 'antd';
import { Modal } from 'react-bootstrap';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { DetailUserModalProps } from './interfaces/interfaces';
import CurrentTheme from '../../../styles/index';

const { Text, Title } = Typography;

const DetailUserModal: React.FC<DetailUserModalProps> = ({ user, isModalOpen, handleCancel, handleShowPassword }) => {
    const currentTheme = CurrentTheme();

    const className = {
        title: "m-0 p-0",
        subTitle: "m-0 p-0",
    }

    const style = {
        modal: {
            backgroundColor: currentTheme.other,
        },
        title: {
            color: currentTheme.title,
        },
        text: {
            color: currentTheme.text
        }
    };

    return (
        <Modal
            show={isModalOpen}
            onHide={handleCancel}
            centered
        >
            <Modal.Header style={style.modal}>
                <Title level={4} className={className.title} style={style.title}>Detail User</Title>
            </Modal.Header>
            <Modal.Body style={style.modal}>
                <div className='py-[10px]'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Title level={5} className={className.subTitle} style={style.title}>Username</Title>
                            <Text style={style.text}>{user.username}</Text>
                        </div>
                        <div>
                            <Title level={5} className={className.subTitle} style={style.title}>Phone</Title>
                            <Text style={style.text}>{user.phone}</Text>
                        </div>
                        <div>
                            <Title level={5} className={className.subTitle} style={style.title}>Email</Title>
                            <Text style={style.text}>{user.email}</Text>
                        </div>
                        <div>
                            <Title level={5} className={className.subTitle} style={style.title}>Password</Title>
                            <div className='flex justify-between items-center'>
                                <Text style={style.text}>
                                    {user.showPassword
                                        ? user.password
                                        : '••••••••'}
                                </Text>
                                <Tooltip
                                    title={
                                        user.showPassword
                                            ? 'Hide Password'
                                            : 'Show Password'
                                    }
                                >
                                    <Button
                                        shape="circle"
                                        icon={
                                            <div className='flex justify-center'>
                                                {user.showPassword ? (
                                                    <EyeInvisibleOutlined />
                                                ) : (
                                                    <EyeOutlined />
                                                )}
                                            </div>
                                        }
                                        onClick={() =>
                                            handleShowPassword()
                                        }
                                    />
                                </Tooltip>
                            </div>
                        </div>
                        <div>
                            <Title level={5} className={className.subTitle} style={style.title}>Address</Title>
                            <Text style={style.text}>{user.address}</Text>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default DetailUserModal;