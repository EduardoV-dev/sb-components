import './my-label.css';

interface IProps {
    /** Capitalizes the label text */
    allCaps: boolean;
    /** Label's color */
    color: 'primary' | 'secondary' | 'tertiary';
    /** Font color */
    fontColor: string;
    /**  This is the label that will be displayed in the tag */
    label: string;
    /**  This is the size of the label */
    size: 'normal' | 'h1' | 'h2' | 'h3';
}

const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor = '#5517ac',
    label = 'No Label',
    size = 'normal',
}: IProps): JSX.Element => {
    return (
        <span
            className={`label ${size} text-${color} ${allCaps && 'uppercase'}`}
            style={{ color: fontColor }}
        >
            {label}
        </span>
    );
};

export default MyLabel;
