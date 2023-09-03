import { Grid, Typography } from '@mui/material';

type SocialProps = {
  icon: string;
  alt: string;
  url: string;
};

type SocialProp = {
  customSocial?: Array<SocialProps>;
};

const defaultSocial = [
  {
    icon: './icons/social_media/logo-facebook.svg',
    alt: 'Facebook',
    url: 'https://pagina.com',
  },
  {
    icon: './icons/social_media/logo-instagram.svg',
    alt: 'Instagram',
    url: 'https://pagina.com',
  },
  {
    icon: './icons/social_media/logo-whatsapp.svg',
    alt: 'Whatsapp',
    url: 'https://pagina.com',
  },
  {
    icon: './icons/social_media/logo-youtube.svg',
    alt: 'Youtube',
    url: 'https://pagina.com',
  },
];

const SocialMedia = ({ customSocial = defaultSocial }: SocialProp) => {
  return (
    <>
      <Typography
        pb={3}
        component='p'
        textAlign={'center'}
        display={{ xs: 'none', md: 'block' }}
      >
        Redes sociales
      </Typography>
      <Grid container columns={4}>
        {customSocial.map((social, index) => (
          <Grid
            item
            xs={1}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            key={social.alt}
          >
            <a href={social.url}>
              <img src={social.icon} alt={social.alt} />
            </a>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default SocialMedia;
