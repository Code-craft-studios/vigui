import { PropsWithChildren } from 'react';
import { Paper } from '@mui/material';

const Card = ({ children }: PropsWithChildren) => {
  return <Paper sx={{ p: 4 }}>{children}</Paper>;
};
export default Card;
