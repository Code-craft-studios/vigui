import IconText from '@/ui/IconText';
import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
  src: string;
  alt: string;
  title: string;
}

const OthersIconText = ({children, src, alt, title}: Props) => {
  return (
    <IconText src={src} alt={alt}>
      <Typography variant="h5" component="h3">{ title }</Typography>
      <Typography>{children}</Typography>
    </IconText>
  );
};
export default OthersIconText;
