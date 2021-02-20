import { render } from '@testing-library/react';
import { TEST } from '../../constants';
import MessageError from './index';

test('should render MessageError', () => {
  const { getByTestId } = render(<MessageError />);
  expect(getByTestId(TEST.MessageError)).toBeInTheDocument();
});

test('should render correct error message', () => {
  const { getByText } = render(<MessageError message={'error 1'} />);
  expect(getByText('error 1')).toBeInTheDocument();
});
