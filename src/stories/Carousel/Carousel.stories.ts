import type { Meta, StoryObj } from '@storybook/react';

import { CustomCarousel } from './MaybeCarousel';

const meta = {
  title: 'Example/CustomCarousel',
  component: CustomCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
