import ErrorIcon from '@material-ui/icons/Error';
import { TEST } from '../../constants';
import styles from './MessageError.module.css';

export const MessageError = ({ message }) => (
	<div className={styles.container} data-testid={TEST.MessageError}>
		<ErrorIcon className={styles.icon} />
		<div className={styles.message}>{message}</div>
	</div>
);
 
