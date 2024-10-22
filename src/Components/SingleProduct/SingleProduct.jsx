
import { GoPencil } from "react-icons/go";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const SingleProduct = ({ product ,setItem}) => {
    // load all data
const alldata = useLoaderData()
// console.log(alldata)
    // console.log(product)
    const { _id, name, price, details, photo, teast } = product

    const handleView = (id) => {

    }

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount) {
                                const remainingCoffee =alldata.filter(data => data._id != id)
                                setItem(remainingCoffee)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Coffee has been deleted.",
                                    icon: "success"
                                });

                            }
                        })

                }
            });



    }

    const handleEddit = (id) => {

    }

    return (
        <div className="flex p-6 bg-[#F5F4F1] rounded-xl shadow-lg">
            <div><img src={photo} alt="coffee image" /></div>
            <div className="px-5 grid grid-cols-1 gap-2">
                <p><span className="font-bold ">Name :</span>{name}</p>
                <p><span className="font-bold">Details :</span>{details}</p>
                <p><span className="font-bold ">Teast :</span>{teast}</p>
                <p><span className="font-bold ">Price :</span>{price}</p>
            </div>

            <div className="my-auto space-y-8 grid grid-cols-1 mr-0 md:ml-8">

                <button><IoEye className="h-8 w-6 bg-[#D2B48C]  rounded-md "></IoEye></button>
                <Link to={`updateCoffee/${_id}`}> <GoPencil className="h-8 w-5 bg-black text-white rounded-md" />
                </Link>

                <button onClick={() => handleDelete(_id)}><MdDelete className="h-8 w-6 bg-red-600 rounded-md text-white" ></MdDelete> </button>
            </div>

        </div>
    );
};

export default SingleProduct;