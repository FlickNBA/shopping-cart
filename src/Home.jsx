import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography
        variant='h1'
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          color: 'roleski.primary',
          paddingY: '1rem',
        }}
      >
        {/* Spróbuj nowej musztardy American Classic */}
        {/* Spróbuj nowego ketchupu Premium Jalapeno */}
        Spróbuj nowych sosów Roleski Keto
      </Typography>
      <Box
        sx={{
          // backgroundImage: 'url(./musztarda.jpg)',
          // backgroundImage: 'url(./ketchup.jpg)',
          backgroundImage: 'url(./keto.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginX: '2.5rem',
          borderRadius: '1rem',
          aspectRatio: '2.5/1',
          border: 4,
          borderColor: 'roleski.primary',
        }}
      />
      <Typography
        variant='h2'
        sx={{
          fontSize: '2rem',
          textAlign: 'left',
          color: 'roleski.primary',
          paddingY: '1rem',
          paddingX: '2.5rem',
        }}
      >
        Polecane produkty:
      </Typography>
      <Grid
        container
        columns={5}
        sx={{
          width: '100%',
        }}
      ></Grid>
    </>
    // <Grid
    //   columns={1}
    //   container
    //   sx={{
    //     width: '100%',
    //     minHeight: '50vh',
    //   }}
    // >
    //   <Grid xs={1}>
    //     <Typography
    //       variant='h1'
    //       sx={{
    //         fontSize: '2.5rem',
    //         textAlign: 'center',
    //         color: 'roleski.primary',
    //         paddingY: '1rem',
    //       }}
    //     >
    //       {/* Spróbuj nowej musztardy American Classic */}
    //       {/* Spróbuj nowego ketchupu Premium Jalapeno */}
    //       Spróbuj nowych sosów Roleski Keto
    //     </Typography>
    //     <Box
    //       sx={{
    //         // backgroundImage: 'url(../src/musztarda.jpg)',
    //         // backgroundImage: 'url(../src/ketchup.jpg)',
    //         backgroundImage: 'url(../src/keto.jpg)',
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         width: '90%',
    //         marginX: 'auto',
    //         borderRadius: '1rem',
    //         aspectRatio: '2.5/1',
    //         border: 4,
    //         borderColor: 'roleski.primary',
    //       }}
    //     ></Box>
    //   </Grid>
    // </Grid>
  );
}
