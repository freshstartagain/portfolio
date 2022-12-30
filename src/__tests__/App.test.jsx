import React from 'react';
import './matchMedia.mock';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import timeline from "../data/timeline";
import App from "../App";


test('renders the app component', () => {
    render(<App />);

    // Test navigation section
    const navText = ['Profile', 'Timeline', 'Tools']

    navText.map((text) => {
        let link = screen.getAllByText(text)[0]
        userEvent.click(link);
        expect(link.href).toContain(`#${text.toLowerCase()}`);
    });

    // Test all heading
    const headings = ['Lester', 'Timeline', 'Tools'];

    headings.map((heading) => {
        expect(screen.getByRole('heading', { name: heading }));
    });

    // Test timeline
    timeline.map((x) => {
        expect(screen.getAllByText(x.year)[0]);
        expect(screen.getAllByText(x.company)[0]);
        expect(screen.getAllByText(x.title)[0]);
        expect(screen.getAllByText(x.duration)[0]);
        expect(screen.getAllByText(x.details)[0]);
    });

    // Test tools
    const tools = ['Frontend', 'Backend', 'Dev Ops', 'Project Management'];

    tools.map((tool) => {
        expect(screen.getAllByText(tool));
    });
});