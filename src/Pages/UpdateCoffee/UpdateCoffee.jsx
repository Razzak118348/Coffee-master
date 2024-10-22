import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const Coffee = useLoaderData()
    const { _id, name, price, details, photo, teast, quantity, category, supplier } = Coffee;

    const handleUpdateCoffee = event => {
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
const updateCoffee = {name, price, quantity, details, photo, category, supplier, teast}

        console.log(updateCoffee);

        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateCoffee),

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
       if(data.modifiedCount){
       Swal.fire({
        title: 'Success!',
        text: 'Coffee update successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
form.reset();
    }

        })
    }


    return (
        <div className="mt-16">
            <Link className="flex " to="/"><button className="rancho-font  btn m-4"><FaArrowLeftLong className="mr-2" /> Back to home</button></Link>

            <div>
                <h1 className="text-xl md:text-3xl font-extrabold text-center my-8">Update the ({name})  Coffee</h1>


                <div className="bg-[#F4F3F0] p-6 rounded-xl">


                    <form onSubmit={handleUpdateCoffee} className="mx-0 md:mx-20">
                        <div className="flex items-center justify-center mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full">
                                <div className="form-control">
                                    <label className="label">Coffee Name</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Coffee Quantity</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Total quantity"
                                            defaultValue={quantity}
                                            name="quantity" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Category</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee category" name="category"
                                            defaultValue={category}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Coffee Price</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee price"
                                            defaultValue={price}
                                            name="price" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Coffee Details</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee details" name="details"
                                            defaultValue={details}
                                            className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Supplier Name</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee supplier"
                                            defaultValue={supplier}
                                            name="supplier" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">Taste</label>
                                    <label className="input-group">
                                        <input type="text" placeholder="Coffee taste"
                                            defaultValue={teast}
                                            name="teast" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">Photo URL</label>
                                    <input type="text" placeholder="Photo URL"
                                        defaultValue={photo}
                                        name="photo" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-6">
                            <input type="submit" value="Update Coffee" className="bg-[#e38811] p-3 rounded-xl rancho-font font-bold  text-xl hover:bg-yellow-400 w-full" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;