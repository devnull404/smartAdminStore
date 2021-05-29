import {useState, useEffect} from 'react';
import ProductsCard from './ProductsCard'

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products")
            .then(res =>  {
                console.log(res)
                if(res.ok) {
                    return res.json()
                }
            })
            .then(jsonRes => setProducts(jsonRes))
    });

    return(
        products.map((item) => {
            return(
                <ProductsCard info={item}/>
            )
        })
    )
};
export default ProductsContainer





