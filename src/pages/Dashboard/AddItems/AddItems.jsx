import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading='Add an item' subHeading="What's new?" ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('name',{ required: true })}
                            required
                            className="input input-bordered w-full " />
                    </label>
                    <div className='flex gap-6'>
                        {/* Categoroy */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled selected>Select a category</option>
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
                                placeholder="Price"
                                {...register('price' , { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* Recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register('recipe' , { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>


                    <div className='form-control w-full my-6'>
                        <input {...register('image' , { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className='btn mb-6'>
                        Add Item <FaUtensils className='ml-2'></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;