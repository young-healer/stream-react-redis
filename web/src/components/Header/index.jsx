import {ToggleButton} from '../../components';
import {FilterInput} from '../../components';
import styles from './Header.module.css';
import { TEST } from '../../constants';

export const Header = ({
	onToggle = () => {},
	isStreamActive,
	filterValue = '',
	onFilterChange = () => {},
}) => (
		<div className={styles.container} data-testid={TEST.header}>
			<ToggleButton activeDefault={isStreamActive} onClick={onToggle} />
			<FilterInput value={filterValue} onChange={onFilterChange} />
		</div>
);

