import type { Meta, StoryObj } from '@storybook/angular';
import { NotificationComponent } from './notification';

const meta: Meta<NotificationComponent> = {
  title: 'Components/Notification',
  component: NotificationComponent,
  tags: ['autodocs'],
  args: {
    type: 'info',
    message: 'This is an informational notification',
    visible: true,
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
    },
    message: { control: 'text' },
    visible: { control: 'boolean' },
    closed: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<NotificationComponent>;

export const Info: Story = {};
export const Success: Story = { args: { type: 'success', message: 'Operation successful!' } };
export const Warning: Story = { args: { type: 'warning', message: 'Be careful!' } };
export const Error: Story = { args: { type: 'error', message: 'Something went wrong!' } };
