import SearchIcon from '@material-ui/icons/Search';
import { TEST } from '../../constants';
import styles from './FilterInput.module.css';

export const FilterInput = ({ onChange = () => {}, value = '', placeholder = 'Type to search...' }) => (
	<div className={styles.container} data-testid={TEST.filterInput}>
		<SearchIcon className={styles.icon} />
		<input
			className={styles.input}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			type='text'
		/>
	</div>
);

