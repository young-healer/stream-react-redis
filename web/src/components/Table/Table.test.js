import { render } from '@testing-library/react';
import { EVENT_TYPES, TEST } from '../../constants';
import Table from './index';

const testProps = {
  events: [{
    type: EVENT_TYPES.identify,
    traits: {
      email: 'test@test.com',
    },
    receivedAt: '2012-12-12',
  }]
}

test('should render Table', () => {
  const { getByTestId } = render(<Table {...testProps} />);
  expect(getByTestId(TEST.Table)).toBeInTheDocument();
});

test('should render correct event type', () => {
  const { getByText } = render(<Table {...testProps} />);
  expect(getByText(EVENT_TYPES.identify)).toBeInTheDocument();
});

test('should render correct date', () => {
  const { getByText } = render(<Table {...testProps} />);
  expect(getByText('2012/12/12 04:00:00')).toBeInTheDocument();
});

test('should render correct email', () => {
  const { getByText } = render(<Table {...testProps} />);
  expect(getByText('test@test.com')).toBeInTheDocument();
});
