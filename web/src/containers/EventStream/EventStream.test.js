import { render } from '@testing-library/react';
import { TEST } from '../../constants';
import EventStream from './index';

test('should render EventStream', () => {
  const { getByTestId } = render(<EventStream />);
  expect(getByTestId(TEST.eventStream)).toBeInTheDocument();
});
