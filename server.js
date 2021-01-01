const express = require("express");
const app = express();
const cors = require("cors");

const { data } = require('./data');

// use middlewares
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to ocp api')
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
})

app.get('/api/products', (req,res) => {
    res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
