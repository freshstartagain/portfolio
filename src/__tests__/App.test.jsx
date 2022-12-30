import './matchMedia.mock';
import { render } from '@testing-library/react';
import App from "../App";


test('renders the landing page', () => {
    render(<App />);
});