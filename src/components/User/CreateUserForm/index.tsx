import { Button, Form, Input } from 'antd';
import { CreateUserFormProps } from './interfaces/interfaces';
import CustomText from '../../General/CustomText';

const CreateUserForm: React.FC<CreateUserFormProps> = ({ isLoading, onFinish, onFinishFailed }) => {
    const className = {
        container: "mb-[30px]",
        input: `rounded-lg shadow-inner border-none`,
        button: "shadow-xl rounded-xl",
    };

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label={<CustomText text="Username" />}
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input the username!',
                    }
                ]}
                className={className.container}
            >
                <Input
                    maxLength={16}
                    className={className.input}
                    type="username"
                    placeholder="example: johndoe"
                />
            </Form.Item>
            <Form.Item
                label={<CustomText text="Password" />}
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input the password!',
                    },
                    {
                        pattern: /^[0-9]*$/,
                        message: "Password should contain only number (0-9)"
                    }
                ]}
                className={className.container}
            >
                <Input.Password
                    maxLength={8}
                    type="password"
                    autoComplete="on"
                    className={className.input}
                    placeholder="input the password..."
                />
            </Form.Item>
            <Form.Item
                label={<CustomText text="Email" />}
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input the email!',
                    },
                    {
                        type: 'email',
                        message: 'Please input the valid email!',
                    },
                ]}
                className={className.container}
            >
                <Input
                    className={className.input}
                    placeholder="example: johndoe@email.com"
                />
            </Form.Item>
            <Form.Item
                label={<CustomText text="Phone" />}
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input the phone number!',
                    },
                    {
                        pattern: /^[0-9]*$/,
                        message: "Phone should contain only number (0-9)"
                    }
                ]}
                className={className.container}
            >
                <Input
                    maxLength={16}
                    className={className.input}
                    placeholder="example: 081285164573"
                />
            </Form.Item>
            <Form.Item
                label={<CustomText text="Address" />}
                name="address"
                rules={[
                    {
                        required: true,
                        message: 'Please input the address!',
                    },
                ]}
                className={className.container}
            >
                <Input.TextArea
                    rows={4}
                    className={className.input}
                    placeholder="example: 61608 Cambridge Court"
                />
            </Form.Item>
            <Form.Item className='m-0'>
                <Button
                    className={className.button}
                    type="primary"
                    htmlType="submit"
                    block
                    loading={isLoading}
                >
                    Create User
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CreateUserForm;