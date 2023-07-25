import type { Meta, StoryObj } from '@storybook/react';

import AnimatedButton from '../ui/AnimatedButton';

const meta = {
  title: 'Example/AnimatedButton',
  component: AnimatedButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Comprar'
  },
};
