import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Box } from '@mui/material';
import Searchbar from './Searchbar';
import Basket from './Basket';

export default function Header({
  basket,
  setBasket,
  allProducts,
  setAllProducts,
}) {
  return (
    <Grid
      columns={10}
      container
      sx={{
        width: '100%',
        padding: '0.75rem',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        xs={3}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component='img'
          sx={{
            height: '4rem',
            marginRight: '1rem',
          }}
          src='./logo.png'
        />
        <Typography
          variant='h1'
          color='roleski.secondary'
          sx={{
            textAlign: 'left',
            fontSize: '1.33rem',
          }}
        >
          Najlepsze od
          <br />
          ponad 50 lat
        </Typography>
      </Grid>
      <Grid
        xs={4}
        sx={{
          paddingX: '1rem',
        }}
      >
        <Searchbar />
      </Grid>
      <Grid xs={3} sx={{}}>
        <Basket basket={basket} />
      </Grid>
      {/* 
      <Box
        component='img'
        sx={{
          marginBottom: '-4rem',
          //   width: '4rem',
          //   height: 'auto',
        }}
        src='./src/logo.png'
      /> */}
    </Grid>
  );
}
