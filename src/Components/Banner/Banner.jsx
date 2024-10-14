
const Banner = () => {
    return (
        <div  className="banner rancho-font flex justify-end py-32 bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center  ">

            {/* <img className=""  src="/banner-page.jpg" alt="" /> */}
<div className=" w-[60vw] space-y-2 text-white py-5 ">
    <h1 className="text-xl md:text-3xl font-bold">Would you like a Cap of Delicious Coffee</h1>
<p className="w-3/4">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
<button className="mt-4 bg-yellow-600 p-2 hover:bg-yellow-300 hover:text-black">Learn More</button>
</div>
        </div>
    );
};

export default Banner;