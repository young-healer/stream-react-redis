import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from './Table.module.css';
import { getFormatedDateString } from '../../utils/date';
import { getEventContent } from '../../utils/events';
import { TEST } from '../../constants';


export const Table = ({ events }) => (
	<div data-testid={TEST.Table}>
		<table className={styles.table}>
			<tbody>
				{events.map((event) => (
					<tr className={styles.row} key={`${event.messageId}`}>
						<td className={styles.td}>
							<CheckCircleIcon className={styles.icon} />
						</td>
						<td>{event.type}</td>
						<td>{getEventContent(event)}</td>
						<td>
							{getFormatedDateString(event.receivedAt)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

