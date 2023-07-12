import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <Grid
      columns={7}
      container
      sx={{
        width: '100%',
        padding: '1rem',
        backgroundColor: 'primary.main',
      }}
    >
      <Grid
        xs={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h1'
          color='roleski.secondary'
          sx={{
            textAlign: 'right',
            fontSize: '1.33rem',
          }}
        >
          Najlepsze od
          <br />
          ponad 50 lat
        </Typography>
        <Box
          component='img'
          sx={{
            height: '4rem',
            marginLeft: '1rem',
          }}
          src='./src/logo.png'
        />
      </Grid>
      <Grid xs={5} sx={{}}></Grid>
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
