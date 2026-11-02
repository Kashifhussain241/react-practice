const Products = () => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99
        },
        {
            id: 2,
            name: "Facewash",
            price: 15.99
        },
        {
            id: 3,
            name: "Product 3",
            price: 20.99
        }

    ];


return (
    <div>
        <h1>List of Products</h1>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price.toFixed(2)}</p>
                </li>
            ))}
        </ul>
    </div>
);
};

export default Products;