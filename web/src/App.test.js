import { render } from '@testing-library/react';
import App from './App';
import { TEST } from './constants';

test('should render EventStream', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId(TEST.eventStream)).toBeInTheDocument();
});
