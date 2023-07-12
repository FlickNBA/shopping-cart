import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography } from '@mui/material';
export default function Basket() {
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
        20 zł (+ 8 zł wysyłki)
      </Typography>
    </Grid>
  );
}
