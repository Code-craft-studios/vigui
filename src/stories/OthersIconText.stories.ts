import OthersIconText from '@/components/OthersIconText';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/OthersIconText',
  component: OthersIconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OthersIconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: './icon.svg',
    alt: 'Descarga',
    title: 'Instalacion',
    subtitle: 'Soporta varios dispositivos conectados',
  },
};
