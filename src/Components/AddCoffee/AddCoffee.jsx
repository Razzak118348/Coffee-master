import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value; // Added this line
        const quantity = form.quantity.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const supplier = form.supplier.value;
        const teast = form.teast.value;
const newCoffee = {name, price, quantity, details, photo, category, supplier, teast}
        console.log(newCoffee);

        //send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCoffee),

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
if(data.insertedId){
    Swal.fire({
        title: 'Success!',
        text: 'Coffee added successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
form.reset();
}
        })
    }

    return (
        <div>
            <button className="rancho-font btn m-4">
                <Link className="flex" to="/">
                    <FaArrowLeftLong className="mr-2" /> Back to home
                </Link>
            </button>

            <div className="bg-[#F4F3F0] p-6 rounded-xl">
                <h3 className="text-center text-xl md:text-3xl font-bold rancho-font">Add New Coffee</h3>
                <div className="flex items-center justify-center my-5">
                    <p className="w-full mx-5 md:w-1/2">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <form onSubmit={handleAddCoffee} className="mx-0 md:mx-20">
                    <div className="flex items-center justify-center mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full">
                            <div className="form-control">
                                <label className="label">Coffee Name</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Coffee Quantity</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Total quantity" name="quantity" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Category</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee category" name="category" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Coffee Price</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee price" name="price" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Coffee Details</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee details" name="details" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Supplier Name</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee supplier" name="supplier" className="input input-bordered w-full" />
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">Taste</label>
                                <label className="input-group">
                                    <input type="text" placeholder="Coffee taste" name="teast" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control">
                            <label className="label">Photo URL</label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mt-6">
                        <input type="submit" value="Add Coffee" className="bg-[#D2B48C] p-3 rounded-xl rancho-font hover:bg-yellow-400 w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
