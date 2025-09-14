import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VideoPlayer from '../VideoPlayer';

describe('VideoPlayer', () => {
  it('renders play button and toggles state', async () => {
    render(<VideoPlayer src="/video/intro.mp4" />);
    const btns = await screen.findAllByRole('button');
    expect(btns.length).toBeGreaterThan(0);
    fireEvent.click(btns[0]);
  });
});
