import { render } from '@testing-library/react';
import { TEST } from '../../constants';
import Header from './index';

test('should render Header', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId(TEST.header)).toBeInTheDocument();
});

test('should render error', () => {
  const { getByText } = render(<Header error={'error 2'} />);
  expect(getByText('error 2')).toBeInTheDocument();
});

test('should render FilterInput', () => {
  const { getByTestId } = render(<Header error={'error 2'} />);
  expect(getByTestId(TEST.filterInput)).toBeInTheDocument();
});

test('should render ToggleButton', () => {
  const { getByTestId } = render(<Header error={'error 2'} />);
  expect(getByTestId(TEST.toggleButton)).toBeInTheDocument();
});
