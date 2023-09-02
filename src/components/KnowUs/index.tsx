import ListItemsLink from '@/ui/ListItemsLink';
import { Typography } from '@mui/material';

const KnowUs = () => {
  return (
    <>
      <Typography variant='h6' component='h2' fontWeight='bold'>
        Conócenos
      </Typography>
      <ListItemsLink
        customLinks={[
          {
            text: 'Planes y servicios',
            url: '#section-planes',
          },
          {
            text: 'Internet',
            url: '#',
          },
          {
            text: 'Televisión',
            url: '#',
          },
          {
            text: 'Otros servicios',
            url: '#section-otros-servicios',
          },
        ]}
      />
    </>
  );
};

export default KnowUs;
