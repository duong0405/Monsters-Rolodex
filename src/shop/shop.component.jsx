import { useContext } from "react";
import { ProductsContext } from "../contexts/products.context";

const Shop = () => {

    const { products } = useContext(ProductsContext);

    return (
        <div>
            {products.map((item) => <h1>{item.name}</h1>)}
        </div>
    )
}

export default Shop;