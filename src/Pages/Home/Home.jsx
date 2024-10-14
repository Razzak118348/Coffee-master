import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";


const Home = () => {
    return (
        <div className="rancho-font">
<Banner></Banner>
<div className="bg-[#ECEAE3] flex justify-around items-center p-8">

<div className="space-y-3 mr-4"><img className="w-16 h-16" src="/cup.png" alt="" /><h4 className="text-xl font-bold">Awesome Aroma</h4><p className="w-full lg:w-3/4">you will definitely be a fan of the design & aroma of your coffee</p></div>
<div className="space-y-3 mr-4"><img className="w-16 " src="/batch.png" alt="" /><h4 className="text-xl font-bold">High Quality</h4><p className="w-full lg:w-3/4">We served the coffee to you maintaining the best quality</p></div>
<div className="space-y-3 mr-4"><img className="w-16 "  src="/coffeeSead.png" alt="" /><h4 className="text-xl font-bold">Pure Grades</h4><p className="w-full lg:w-3/4">The coffee is made of the green coffee beans which you will love</p></div>
<div className="space-y-3 "><img className="w-16 "  src="/coffee.png" alt="" /><h4 className="text-xl font-bold">Proper Roasting</h4><p className="w-full lg:w-3/4">Your coffee is brewed by first roasting the green coffee beans</p></div>
</div>


{/* //Popular Products */}

<Products></Products>
        </div>
    );
};

export default Home;