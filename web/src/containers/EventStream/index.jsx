import { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import {Header, Table , MessageError} from '../../components';
import { SOCKET_ENDPOINT, TEST } from '../../constants';
import { getFilteredArray } from '../../utils/events';
let client;
let clientEvents = [];
let clientError;

const getClientConnection = () => (client = io(SOCKET_ENDPOINT));

const disconnectClient = () => {
	if (client) {
		client.disconnect();
		client = undefined;
	}
};

const EventStream = () => {
	const [isClientActive, setIsClientActive] = useState(true);
	const [filterInput, setFilterInput] = useState('');
	const [, updateState] = useState();

	const forceUpdate = useCallback(() => updateState({}), []);
	const toggleStream = () => setIsClientActive(!isClientActive);
	const changeFilterValue = (e) => setFilterInput(e.target.value);

	useEffect(() => {
		if (isClientActive && !client) {
			const stream = getClientConnection();

			stream.on('events', (events) => {
				clientEvents = events.concat(clientEvents);
				clientError = null;
				forceUpdate();
			});

			stream.on('connect_error', () => {
				clientError = 'Server unavailable';
				forceUpdate();
			});

			stream.on('error', () => {
				clientError = 'Server error';
				forceUpdate();
			});
		} else {
			disconnectClient();
		}

		return () => disconnectClient();
	}, [forceUpdate, isClientActive]);

	return (
		<div data-testid={TEST.eventStream}>
			<Header
				error={clientError}
				isStreamActive={isClientActive}
				filterValue={filterInput}
				onToggle={toggleStream}
				onFilterChange={changeFilterValue}
			/>
		{clientError && <MessageError message={clientError} />}
			<Table events={getFilteredArray(filterInput, clientEvents)} />
		</div>
	);
};

export default EventStream;
