import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Typography, colors } from '@mui/material';
import { getProducts } from './utilities';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const addProducts = async () => {
      let AP = [];
      let data = await getProducts();
      let types = [...new Set(data['products'].map((p) => p['type']))];
      let newData = [];
      types.forEach((t) => {
        newData.push(data['products'].filter((p) => p['type'] === t));
      });
      newData.forEach((d, i) => {
        console.log(d);

        let PA = [];

        d.forEach((item, ii) => {
          PA.push(
            <Grid xs={1} key={ii}>
              <Box
                sx={{
                  backgroundColor: colors.common.white,
                  borderRadius: '1rem',
                  width: '95%',
                  padding: '1rem',
                  marginX: 'auto',
                  border: 2,
                  borderColor: 'roleski.primary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(./${item['image']})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    width: '33%',
                    marginLeft: 0,
                    borderRadius: '1rem',
                    aspectRatio: `${data['extras'][item['type']]['ratio']}`,
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '67%',
                    paddingLeft: '1rem',
                  }}
                >
                  <Typography
                    variant='h1'
                    sx={{
                      marginBottom: '0.5rem',
                      fontSize: '1.5rem',
                    }}
                  >
                    {item['name']} ({item['amount']}g)
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{
                      fontSize: '1rem',
                    }}
                  >
                    {item['description']}
                  </Typography>
                  <Button
                    sx={{
                      color: colors.common.white,
                      fontWeight: 700,
                      paddingX: 0,
                      fontSize: '1.125rem',
                      marginTop: '1rem',
                      width: '100%',
                    }}
                    variant='contained'
                    size='large'
                    color='roleski'
                  >
                    Dodaj do koszyka ({item['price']} zł)
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        });

        console.log(PA);

        AP.push(
          <>
            <Grid xs={3}>
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
                Spróbuj naszych nowych{' '}
                {data['extras'][d[0]['type']]['dopelniacz']}:
              </Typography>
            </Grid>
            {PA}
          </>
        );
      });
      setAllProducts(AP);
    };

    addProducts();
  }, []);

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

      <Grid
        container
        columns={3}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '5rem',
        }}
      >
        {allProducts}
      </Grid>
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
