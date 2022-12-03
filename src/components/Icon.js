import * as icons from 'react-bootstrap-icons';

export const Icon = (props) => {
    const { iconName, ...otherProps } = props;

    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...otherProps} />;
}