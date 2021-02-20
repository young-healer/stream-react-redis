import { TEST } from '../../constants';
import styles from './ToggleButton.module.css';

export const ToggleButton = ({ onClick = () => {}, value = true }) => {
	return (
		<div className={styles.wrapper} data-testid={TEST.toggleButton}>
			<input
				className={styles.checkbox}
				type='checkbox'
				id='checkbox'
				onClick={onClick}
				value={value}
			/>
			<label htmlFor='checkbox'></label>
		</div>
	);
};

