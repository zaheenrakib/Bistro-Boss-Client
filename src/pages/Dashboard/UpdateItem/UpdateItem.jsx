import React, { useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaUpload } from 'react-icons/fa';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const {name, category , recipe , price , _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState()
  const onSubmit = async (data) => {
    setLoading(true);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      //
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
      console.log(menuRes.data)
      if (menuRes.data.modifiedCount > 0) {
        // show success popup
        setLoading(false);
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the manu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }
  if (loading) {
    return <div className='flex justify-center items-center h-screen'><span className="loading loading-dots bg-green-500 loading-lg"></span></div>
  }
  return (
    <>
      <div>
        <SectionTitle heading="Update an Item" subHeading="Refresh info"></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register('name', { required: true })}
              required
              className="input input-bordered w-full " />
          </label>
          <div className='flex gap-6'>
            {/* Categoroy */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue={category} {...register('category', { required: true })}
                className="select select-bordered w-full">
                <option disabled value="default" >Select a category</option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soup'>Soup</option>
                <option value='dessert'>Dessert</option>
                <option value='drinks'>Drinks</option>
              </select>
            </label>
            {/** price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register('price', { required: true })}
                className="input input-bordered w-full" />
            </label>
          </div>
          {/* Recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea {...register('recipe', { required: true })} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
          </label>


          <div className='form-control w-full my-6'>
            <input {...register('image', { required: true })} type="file" className="file-input bg-orange-400 w-full max-w-xs" />
          </div>

          <button className='btn mb-6 btn-success text-white'>
            Update Menu Item <FaUpload className='ml-2'></FaUpload>
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateItem