import SHOP_DATA from "../shop-data.json";

const Shop = () => {
    return (
        <div>
            {SHOP_DATA.map((item) => <h1>{item.name}</h1>)}
        </div>
    )
}

export default Shop;