// src/app/shared/toggle/toggle.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Toggle } from './toggle';

const meta: Meta<Toggle> = {
  title: 'Shared/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: { checked: false, onLabel: 'On', offLabel: 'Off' },
  argTypes: { checkedChange: { action: 'checkedChange' } }, // Logs in Actions
};
export default meta;

type Story = StoryObj<Toggle>;

// Simple play demo — no spies, just a click + assertion
export const ClickToToggle: Story = {
  args: { checked: false },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const c = within(canvasElement);
    const checkbox = await c.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  },
};
