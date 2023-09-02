import { Typography } from '@mui/material';
import { titleClasses } from './classes';

type Variants = "primary" | "secondary";

type Props = {
  text: string;
  variant?: Variants;
};


const Title = ({ text, variant }: Props) => {
  return (
    <Typography className={titleClasses({intent:variant})} fontWeight={700} textAlign={'center'}>
      {text}
    </Typography>
  );
};

export default Title;
