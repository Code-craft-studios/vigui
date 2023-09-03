import BenefitsIconText from '@/components/BenefitsIconText';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/BenefitsIconText',
  component: BenefitsIconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BenefitsIconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: './icon.svg',
    alt: 'Descarga',
    children: 'Descarga de manera ininterrumpida',
  },
};
