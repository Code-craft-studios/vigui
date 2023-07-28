import type { Meta, StoryObj } from '@storybook/react';

import CardService from '../components/CardService';


const meta = {
  title: 'Example/CardService',
  component: CardService,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardService>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: '$44.000',
    title: '6Mb - 30Mb',
    items: ['Navega', 'Descarga', 'Transmite', 'Juega en vivo'],
    variant: 'primary',
  },
};
