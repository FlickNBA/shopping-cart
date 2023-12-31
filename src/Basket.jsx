import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
export default function Basket({ basket }) {
  return (
    <Grid
      container
      columns={3}
      sx={{
        width: 'auto',
        backgroundColor: 'roleski.secondary',
        borderRadius: '2rem',
        paddingX: '0.75rem',
        paddingY: '0.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ShoppingBasketIcon
        sx={{
          fontSize: '2.4rem',
        }}
        color='roleski'
      />
      <Typography
        variant='h5'
        color='roleski.primary'
        sx={{
          textAlign: 'left',
          fontSize: '1.25rem',
          marginLeft: '0.5rem',
        }}
      >
        {basket.shipping == 0
          ? `${basket.total} zł (+ wysyłka gratis)`
          : `${basket.total} zł (+ ${basket.shipping} zł wysyłki)`}
      </Typography>
    </Grid>
  );
}
