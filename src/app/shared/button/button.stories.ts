// button.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: { label: 'Primary', variant: 'primary', disabled: false },
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'radio', options: ['primary', 'outline'] },
    disabled:{ control: 'boolean' },
    clicked:  { action: 'clicked' }, 
  },
};
export default meta;
type Story = StoryObj<Button>;
export const Playground: Story = {};
