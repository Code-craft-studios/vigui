import type { Meta, StoryObj } from '@storybook/react';

import CardMember from '@/components/CardMember';

const meta = {
  title: 'Example/CardMember',
  component: CardMember,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardMember>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        img: '/images/vigui-equipo-atencion-al-cliente-desktop.webp',
        name: 'Victor Alonso',
        position: 'Representante Legal',
      },
};
