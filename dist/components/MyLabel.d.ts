/// <reference types="react" />
import './my-label.css';
export interface IProps {
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
declare const MyLabel: ({ allCaps, color, fontColor, label, size, }: IProps) => JSX.Element;
export default MyLabel;
