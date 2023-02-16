import { useEffect, useState } from "react";



const Gallery = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);

    const getProducts = async() => {
        const res = await fetch("https://63ecf78631ef61473b2d4984.mockapi.io/products");
        const data =  await res.json();
        setProducts(data);
        setFilter(data);
        
    }
    
    useEffect(() => {
        getProducts();
    }, []);

    const filterFunction = (value) => {
        const buscador = products.filter((product) => 
            product.name.toLowerCase().includes(value.toLowerCase())
        )
    setFilter(buscador)
    }

   return (
        <main>
            <button onClick={() => {
            const tresMas = products.filter((product) => product.price > 300)
            setFilter(tresMas)
            }}
            >300 euros +</button>
            <button onClick={() => {
                const tresMenos = products.filter((product) => product.price < 300);
                setFilter(tresMenos)
            }}>300 euros -</button>
            <input
            type="text"
            onChange={(ev) => {
                filterFunction(ev.target.value)
            }}
            ></input>
            {filter.map((product) => 
            <div key={product.id}>
                <h2>NAME: {product.name}</h2>
                <h3>TYPE: {product.product}</h3>
                <p>DESCRIPTION: {product.description}</p>
                <p>PRICE: {product.price} euros</p>
            </div>
                )}
        </main>
      

    )

    
}
export default Gallery;