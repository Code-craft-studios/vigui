import IconText from '@/ui/IconText';
import { Typography } from '@mui/material';

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const OthersIconText = ({subtitle, src, alt, title}: Props) => {
  return (
    <IconText src={src} alt={alt}>
      <Typography variant="h5" component="h3">{ title }</Typography>
      <Typography>{ subtitle }</Typography>
    </IconText>
  );
};
export default OthersIconText;
