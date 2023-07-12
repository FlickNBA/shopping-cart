import Grid from '@mui/material/Unstable_Grid2/Grid2';

export default function Cart() {
  return (
    <Grid
      columns={7}
      container
      sx={{
        width: '100%',
        minHeight: '50vh',
        backgroundColor: '#456',
      }}
    >
      CART
    </Grid>
  );
}
