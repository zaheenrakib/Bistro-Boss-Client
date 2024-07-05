import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
  const { name, image, price, recipe , _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if(user && user.email){
      //  send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to your Cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart to update the cart items cart
          refetch(); 
        }
      })
    }
    else{
      // TODO: redirect to login page
      Swal.fire({
        title: "You are not Logged In",
        text: "Please Login to add to the Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login",{state: {from: location}} );
        }
      });
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className='absolute right-0 mr-4 mt-4 px-5 rounded  bg-slate-900 text-white' >${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;