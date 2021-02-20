import { render } from '@testing-library/react';
import { TEST } from '../../constants';
import ToggleButton from './index';

test('should render ToggleButton', () => {
  const { getByTestId } = render(<ToggleButton />);
  expect(getByTestId(TEST.toggleButton)).toBeInTheDocument();
});
