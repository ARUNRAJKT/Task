import React, { useState, useEffect } from 'react';
import { Paper, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';

const ProductSuggestions = () => {
    // State for suggested products
    const [suggestedProducts, setSuggestedProducts] = useState([]);

    // Function to fetch product suggestions
    const fetchProductSuggestions = () => {
        axios.get('')
            .then(function (res) {
                // Update state with the suggested products
                const products = res.data.details;
                setSuggestedProducts(products);
            })
            .catch(function (error) {
                // Handle errors
                const message = error.message;
                alert(message);
                console.log(error);
            });
    };

    // Effect to fetch product suggestions when the component mounts
    useEffect(() => {
        fetchProductSuggestions();
    }, []);

    return (
        <center>
            {/* Styled Paper component */}
            <Paper
                elevation={0}
                style={{
                    width: "75%",
                    backgroundColor: "#87CBB9",
                    marginTop: "5%",
                    borderRadius: "40px",
                    boxShadow: "0px 0px 29px 6px rgba(0,0,0,0.75)",
                }}
            >
                <Container>
                    <div>
                        <h3 style={{ marginTop: '-4%' }}>Product Suggestions</h3>

                        {/* Displaying suggested products */}
                        {suggestedProducts.map((product) => (
                            <Grid
                                item
                                className='front'
                                xs={3}
                                style={{ backgroundColor: "#569DAA", margin: "2%", borderRadius: "30px" }}
                                key={product.product_id}
                            >
                                <div>
                                    {/* Displaying product details */}
                                    <Typography style={{ width: "200px", boxShadow: "none", color: "#2F4858" }}>
                                        Product ID: {product.product_id}
                                    </Typography>
                                    <Typography style={{ width: "200px", boxShadow: "none", color: "#2F4858" }}>
                                        Product Category: {product.product_category}
                                    </Typography>
                                    {/* Add other properties as needed */}
                                    <img src={product.image_link} alt="Product" />
                                </div>
                            </Grid>
                        ))}
                        <br />
                    </div>
                </Container>
            </Paper>
        </center>
    );
};

export default ProductSuggestions;