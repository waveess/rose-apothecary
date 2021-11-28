import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';



const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
         {/* material ui grid  */}
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                // xs,sm, md,lg refer to the screen sizes
                <Grid item Key={products.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product} onAddToCart={onAddToCart}/> 
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;