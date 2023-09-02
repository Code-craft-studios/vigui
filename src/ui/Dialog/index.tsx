import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type Props = {
  starValue: number | null;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function FormDialog({ starValue, open, setOpen }: Props) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle align='center'>
        <Rating
          value={starValue}
          readOnly
          size='large'
          icon={<StarIcon sx={{ fontSize: '40px' }} />}
          emptyIcon={
            <StarIcon style={{ opacity: 0.55 }} sx={{ fontSize: '40px' }} />
          }
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText mb={2}>
          Por favor llena los siguientes campos para calificarnos:
        </DialogContentText>
        <TextField
          margin='dense'
          id='name'
          label='Nombre y Apellido'
          type='text'
          fullWidth
          autoFocus
        />
        <TextField
          margin='dense'
          id='name'
          label='Correo Electronico'
          type='email'
          fullWidth
        />
        <TextField
          margin='dense'
          id='name'
          label='Comentario'
          type='text'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={() => setOpen(false)} color='error'>
          Cancelar
        </Button>
        <Button
          variant='outlined'
          onClick={() => setOpen(false)}
          color='success'
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
