import Grid from '@mui/material/Grid';
import { Box, Typography, colors, Button } from '@mui/material';
import { Basket, Item, getProducts } from './utilities';
import { useEffect, useState } from 'react';

export default function Home({
  basket,
  setBasket,
  allProducts,
  setAllProducts,
}) {
  const handleClick = (e, product) => {
    e.preventDefault();
    console.log(e.target);
    console.log(product);

    setBasket((prevBasket) => {
      const newBasket = new Basket();
      newBasket.items = { ...prevBasket.items };
      newBasket.addToBasket(product);
      return newBasket;
    });
  };

  const [allProductElements, setAllProductElements] = useState([]);
  const [TEST, setTEST] = useState([]);

  useEffect(() => {
    const addProducts = async () => {
      let AP = [];
      let data = await getProducts();
      let extras = data['extras'];

      data['products'].forEach((p, i) => {
        let NP = new Item(
          p['type'],
          p['name'],
          p['description'],
          p['image'],
          p['amount'],
          p['price'],
          Math.floor(Math.random() * 9999)
        );
        AP.push(NP);
      });

      setAllProducts(AP);

      AP.forEach((product, i) => {
        setAllProductElements((prevElements) => [
          ...prevElements,
          <Grid item xs={1} key={i * Math.floor(Math.random() * 9999)}>
            <Box
              sx={{
                backgroundColor: colors.common.white,
                borderRadius: '1rem',
                width: '95%',
                padding: '1rem',
                marginX: 'auto',
                marginY: '1rem',
                border: 2,
                borderColor: 'roleski.primary',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(./${product['picture']})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat',
                  width: '33%',
                  marginLeft: 0,
                  borderRadius: '1rem',
                  aspectRatio: `${extras[product['type']]['ratio']}`,
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
                  {product['name']} ({product['amount']}g)
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  {product['description']}
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
                  onClick={(e) => handleClick(e, product)}
                >
                  Dodaj do koszyka ({product['price']} zł)
                </Button>
              </Box>
            </Box>
          </Grid>,
        ]);
      });
    };

    addProducts();
  }, []);

  useEffect(() => {
    setTEST([
      <>
        <Grid item xs={3}>
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
            Spróbuj naszych nowych nowości:
          </Typography>
        </Grid>
        {allProductElements}
      </>,
    ]);
  }, [allProductElements]);

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
        Spróbuj nowych sosów Roleski Keto (darmowa wysyłka od 50 zł)
      </Typography>
      <Box
        sx={{
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
        {TEST}
      </Grid>
    </>
  );
}
