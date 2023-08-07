import { supbaseLocalClient } from "@/lib/modules";
import ListItemsText from "@/ui/ListItemsText";
import { Typography } from "@mui/material";

const defaultHorary = [
  'Lunes - Viernes',
  '9:00 a.m. - 12:00 a.m.',
  '2:00 p.m. - 6:00 p.m.',
  'Sábado',
  '9:00 a.m. - 1:00 p.m.'
]

async function Horary(){
  const customHorary = await supbaseLocalClient.fetchHorary().catch(() => defaultHorary);
  return (
    <>
      <Typography variant='h6' component='h2' fontWeight='bold'>
        Horario de atención
      </Typography>
      <ListItemsText customElements={customHorary ?? []} />
    </>
  )
}

export default Horary;