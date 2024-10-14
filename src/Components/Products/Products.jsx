
import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";
const Products = () => {
    return (
        <div className="mt-16">
<h1 className="text-3xl font-extrabold text-center">Our Popular Products</h1>

<Link to={'/addcoffee'} className="flex  items-center justify-center mb-10"><button   className="flex rounded-lg mt-4 bg-yellow-500 p-2 hover:bg-yellow-300 hover:text-black">Add Coffee <BsCup className="mt-2 ml-2"></BsCup></button></Link>

<div>

</div>
        </div>
    );
};

export default Products;