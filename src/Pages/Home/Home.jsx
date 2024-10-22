import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";
import { useState } from "react";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";


const Home = () => {

    const allCoffee = useLoaderData()
    console.log(allCoffee)
    const [AllItem, setItem] =useState(allCoffee)

    return (
        <div className="rancho-font">
<Banner></Banner>
<div className="bg-[#ECEAE3] grid grid-cols-2  md:grid-cols-4 gap-5 md:gap-8 items-center p-8">

<div className="space-y-3 mr-4"><img className="w-16 h-16" src="/cup.png" alt="" /><h4 className="text-xl font-bold">Awesome Aroma</h4><p className="w-full lg:w-3/4">you will definitely be a fan of the design & aroma of your coffee</p></div>
<div className="space-y-3 mr-4"><img className="w-16 " src="/batch.png" alt="" /><h4 className="text-xl font-bold">High Quality</h4><p className="w-full lg:w-3/4">We served the coffee to you maintaining the best quality</p></div>
<div className="space-y-3 mr-4"><img className="w-16 "  src="/coffeeSead.png" alt="" /><h4 className="text-xl font-bold">Pure Grades</h4><p className="w-full lg:w-3/4">The coffee is made of the green coffee beans which you will love</p></div>
<div className="space-y-3 "><img className="w-16 "  src="/coffee.png" alt="" /><h4 className="text-xl font-bold">Proper Roasting</h4><p className="w-full lg:w-3/4">Your coffee is brewed by first roasting the green coffee beans</p></div>
</div>


{/* //Popular Products design*/}
<Products></Products>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
{
AllItem.map(product => <SingleProduct key={product._id} product={product} setItem={setItem}></SingleProduct>)
}
            </div>

        </div>
    );
};

export default Home;