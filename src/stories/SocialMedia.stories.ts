import SocialMedia from '@/components/SocialMedia';
import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'Example/SocialMedia',
  component: SocialMedia,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    customSocial: [{
      icon: '/icons/social_media/logo-facebook.svg',
      alt: 'Facebook',
      url: 'https://pagina.com'
    },
    {
      icon: '/icons/social_media/logo-instagram.svg',
      alt: 'Instagram',
      url: 'https://pagina.com'
    },
    {
      icon: '/icons/social_media/logo-whatsapp.svg',
      alt: 'Whatsapp',
      url: 'https://pagina.com'
    },
    {
      icon: '/icons/social_media/logo-youtube.svg',
      alt: 'Youtube',
      url: 'https://pagina.com'
    }]
  },
};
