'use client';

import Section from '@/ui/Section';
import FormDialog from '@/ui/Dialog';
import { Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const labels: { [index: string]: string } = {
  1: 'Muy malo',
  2: 'Malo',
  3: 'Regular',
  4: 'Bueno',
  5: 'Excelente',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const RateUs = () => {
  const [starValue, setStarValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Section title='Calificanos'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Rating
            name='hover-feedback'
            value={starValue}
            getLabelText={getLabelText}
            onChange={(e, newValue) => {
              setStarValue(newValue);
              setIsOpenModal(true);
            }}
            onChangeActive={(e, newHover) => {
              setHover(newHover);
            }}
            icon={<StarIcon sx={{ fontSize: '40px' }} />}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} sx={{ fontSize: '40px' }} />
            }
          />
          {starValue !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : starValue]}</Box>
          )}
        </Box>
        <FormDialog
          starValue={starValue}
          open={isOpenModal}
          setOpen={setIsOpenModal}
        />
      </Box>
    </Section>
  );
};

export default RateUs;
