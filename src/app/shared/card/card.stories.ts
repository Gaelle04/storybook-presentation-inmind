// card.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    image: { control: 'text' },
    content: { control: 'text' },
    buttonLabel: { control: 'text' },
      buttonUrl: { control: 'text' },
  buttonClick: { action: 'button clicked' }, 
    darkMode: { control: 'boolean' }, 
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Inmind',
    subtitle: 'Academy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn9RjCmXDcMped4O-58wlZkBvGl1HWZsR9PH6Mhzl7yBkPfEnp1b8GjsxOUvZarFMlQ&usqp=CAU',
    content: 'Summer academy frontend track',
    darkMode: false, 
  },
};

export const ListStyle: Story = {
  render: (args) => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1em;">
        <app-card
          *ngFor="let c of cards"
          [title]="c.title"
          [subtitle]="c.subtitle"
          [image]="c.image"
          [content]="c.content"
          [darkMode]="darkMode"
          [listStyle]="true">
        </app-card>
      </div>
    `,
    props: {
      darkMode: args.darkMode,
      cards: [
        { title: 'Inmind', subtitle: 'Academy', image: 'https://media.licdn.com/dms/image/v2/D4E0BAQFIzYk5O9dZ3w/company-logo_200_200/B4EZUaiOR0H0AI-/0/1739906934358/inmind_ai_sarl_logo?e=2147483647&v=beta&t=MoFMxSngMRrK3xRBAtImBZetaPAWQT3whLAfKTAOkiw', content: 'Summer academy frontend track' },
        
      ],
    },
  }),
  argTypes: {
    darkMode: { control: 'boolean' },
    image: { control: 'text' },
  },
  args: {
    darkMode: false,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn9RjCmXDcMped4O-58wlZkBvGl1HWZsR9PH6Mhzl7yBkPfEnp1b8GjsxOUvZarFMlQ&usqp=CAU',
  },
};

export const WithButton: Story = {
  args: {
    title: 'Inmind',
    subtitle: 'With Button',
    content: 'Click the button below to open a link.',
    buttonLabel: 'Go to inmind website',
    buttonUrl: 'https://inmind.academy/home',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCn9RjCmXDcMped4O-58wlZkBvGl1HWZsR9PH6Mhzl7yBkPfEnp1b8GjsxOUvZarFMlQ&usqp=CAU',
    darkMode: false,
  },
};
