import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import CurrentTheme from '../../../styles/index';

const Loader: React.FC = () => {
    const currentTheme = CurrentTheme();

    return (
        <div className='flex justify-center'>
            <Spin
                indicator={
                    <LoadingOutlined
                        className={`text-[32px] text-[${currentTheme.text}]`}
                        spin
                    />
                }
            />
        </div>
    );
}

export default Loader;
