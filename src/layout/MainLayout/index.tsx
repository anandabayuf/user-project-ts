import { Layout, Button } from 'antd';
import { MainLayoutProps } from "./interfaces/interfaces";
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store/index';
import { switchToDark, switchToLight } from '../../store/actions';
import CurrentTheme from "../../styles";
import { Moon, BrightnessHigh } from 'react-bootstrap-icons';
import { ThemeModeNames } from '../../models/Theme';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const theme = useSelector((state: State) => state.theme);

    const dispatch = useDispatch();

    const currentTheme = CurrentTheme();

    const handleChangeTheme = () => {
        if (theme === "LIGHT") {
            dispatch(switchToDark())
        }
        else {
            dispatch(switchToLight())
        }
    }

    const style = {
        page: {
            backgroundColor: currentTheme.bg
        },
        floatButton: {
            backgroundColor: currentTheme.title
        }
    }

    return (
        <Layout className={`min-h-[100vh]`} style={style.page}>
            <div className="p-[30px]">
                {children}
            </div>
            <div className='fixed right-0 bottom-0 m-8'>
                <Button
                    shape='circle'
                    size='large'
                    className={`shadow-2xl rounded-2xl hover:border-none`}
                    style={style.floatButton}
                    icon={
                        <div className='flex justify-center'>
                            {
                                theme === ThemeModeNames.LIGHT ?
                                    <Moon size={20} color={currentTheme.bg} />
                                    :
                                    <BrightnessHigh size={20} color={currentTheme.bg} />
                            }
                        </div>
                    }
                    onClick={() => handleChangeTheme()} />
            </div>
        </Layout>
    )
}

export default MainLayout;