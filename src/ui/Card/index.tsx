import { Paper } from '@mui/material';

type CardProps = {
  children: React.ReactNode | string;
};

const Card = ({ children }: CardProps) => {
  return <Paper sx={{ p: 4 }}>{children}</Paper>;
};
export default Card;
