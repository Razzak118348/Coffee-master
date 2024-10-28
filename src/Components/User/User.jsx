import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
    const LoadedUsers = useLoaderData()
    const [users,setUsers] = useState(LoadedUsers)

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
                  fetch(`http://localhost:5000/user/${id}`, {
                      method: "DELETE",
                  })
                      .then(res => res.json())
                      .then(data => {
                          console.log(data)
                          if (data.deletedCount) {
                              const remainingUser =users.filter(data => data._id != id)
                              setUsers(remainingUser)
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
    return (
        <div className="mt-20">
<h2 className="text-3xl text-center">Users : {LoadedUsers.length}</h2>

<div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Creation Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
      {
users.map((user,index)=><tr key={user._id}>
    <th>{index+1}</th>
    <td>{user.email}</td>
    <td>{user.createdAt}</td>
    <td><button onClick={()=> handleDelete(user._id)} className="btn">Delete</button></td>
  </tr>)
      }

    </tbody>
  </table>
</div>

        </div>
    );
};

export default User;