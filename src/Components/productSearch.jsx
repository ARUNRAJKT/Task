import React, { useState, useEffect } from 'react';
import { Paper, Button, TextField, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';

export default function Search() {
    // State for input fields
    const [input, setInput] = useState({ search: '', 'Maximun Price': '', 'Minimun Price': '' });
    
    // State to store products
    const [products, setProducts] = useState([]);

    // Function to handle input changes
    const inputChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({ ...prevInput, [name]: value }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);

        // Making a POST request to the server
        axios.post('http://localhost:4004/search', {
            search: input.search,
            'Maximun Price': input['Maximun Price'],
            'Minimun Price': input['Minimun Price'],
        })
            .then(function (res) {
                // Updating state with the response data
                const products = res.data.details;
                console.log(products);
                setProducts(products);
            })
            .catch(function (error) {
                // Handling errors
                const message = error.message;
                alert(message);
                console.log(error);
            });
    };

    // Effect to log products whenever it changes
    useEffect(() => {
        console.log(products);
    }, [products]);

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
                        {/* Form for product search */}
                        <form onSubmit={handleSubmit}>
                            <h3 style={{ marginTop: '-4%' }}>Search Product</h3>
                            {/* Text fields for search criteria */}
                            <TextField
                                id="outlined-basic"
                                onChange={inputChange}
                                label="Product"
                                variant="outlined"
                                style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }}
                                name="search"
                            />
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                onChange={inputChange}
                                label="Maximum Price"
                                variant="outlined"
                                style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }}
                                name="Maximun Price"
                            />
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                onChange={inputChange}
                                label="Minimum Price"
                                variant="outlined"
                                style={{ width: "60%", backgroundColor: "#B9EDDD", color: '#2F4858' }}
                                name="Minimun Price"
                            />
                            <br /> <br />
                            {/* Submit button */}
                            <Button
                                type='submit'
                                variant="contained"
                                style={{
                                    borderRadius: "49% 30% 40% 100% / 100% 78% 49% 0%",
                                    backgroundColor: "#577D86",
                                    width: '114px',
                                    height: "60px",
                                    marginBottom: "20px",
                                    marginLeft: "20px",
                                    color: "#2F4858",
                                }}
                            >
                                Search
                            </Button>
                        </form>

                        {/* Displaying products */}
                        {products.map((product) => (
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
}