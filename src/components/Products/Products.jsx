import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Sugar Scrub', description:'Exfoliating body scrub', price: '$20', image: 'https://i.etsystatic.com/12226646/r/il/7daf7d/3261791752/il_1588xN.3261791752_eroc.jpg' },
    {id: 2, name: 'Whipped Body Cream', description:'With goat milk and botanical extracts', price: '$20', image: 'https://purewows3.imgix.net/images/articles/2020_01/rOSE-APOTHECARY-Whipped-Body-Cream.jpg?auto=format,compress&cs=strip'}
];

const Products = () => {
    return(
        <main>
        {/* material ui grid */}
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                // xs,sm, md,lg refer to the screen sizes
                <Grid item Key={products.id} xs={12} sm={6} md={4} lg={3}>
                   <Product product={product}/> 
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;