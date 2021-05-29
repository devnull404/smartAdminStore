import {
    Link
} from "react-router-dom"

const ProductsCard = (props) => {
    return (
        <Link to="/brand" className="productBrand">
        <div className="productBrandPhoto">
            <img src="/test.png" alt="Bran Logo"/>
        </div>
        <div className="productBrandInfo">
            <ul>
                <li>Product: {props.info.brandName}</li>
                <li>Brand Code: {props.info.brandID}</li>
                <li>Total Products: {props.info.totalProducts}</li>
                <li>Stock: {props.info.stock} pcs</li>
            </ul>
        </div>
        </Link>
    )
};

export default ProductsCard