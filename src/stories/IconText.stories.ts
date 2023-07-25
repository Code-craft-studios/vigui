import IconText from '@/ui/IconText';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'Example/IconText',
  component: IconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/icon.svg',
    alt: 'Descarga',
    children: 'Descarga de manera ininterrumpida'
  },
};
