import { CustomTitleProps } from "./interfaces/interfaces";
import { Typography } from "antd";
import CurrentTheme from "../../../styles";

const { Title } = Typography;

const CustomTitle: React.FC<CustomTitleProps> = ({ title }) => {
    const currentTheme = CurrentTheme();

    const style = {
        color: currentTheme.title,
    };

    return (
        <Title
            level={3}
            style={style}
            className="p-0 m-0"
        >
            {title}
        </Title>
    );
};

export default CustomTitle;