import IconText from '@/ui/IconText';
import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
  src: string;
  alt: string;
}

const BenefitsIconText = ({children, src, alt}: Props) => {
  return (
    <IconText src={src} alt={alt}>
      <Typography>{children}</Typography>
    </IconText>
  );
};
export default BenefitsIconText;
