import { useSelector } from 'react-redux';
import { ThemeModeNames } from '../models/Theme';
import { State } from '../store/index';
import { LIGHT, DARK } from './interfaces/constants';

const CurrentTheme = () => {
    const theme = useSelector((state: State) => state.theme);

    if(theme === ThemeModeNames.LIGHT)
        return LIGHT;
    else return DARK;
}

export default CurrentTheme;