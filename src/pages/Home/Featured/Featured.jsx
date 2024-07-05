import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="check it out" 
            heading="Featured Item"
            >
            </SectionTitle>
            <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-24'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>May 20 , 2024</p>
                    <p className='uppercase'> Where can i get some? </p>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus harum aut, autem voluptates eaque reprehenderit, corrupti minima alias assumenda pariatur consequatur ratione officia eius aperiam libero dicta laudantium ea laborum! Expedita quaerat sed magni saepe sequi perspiciatis consequuntur inventore doloribus quo, assumenda architecto laboriosam et delectus non modi excepturi incidunt?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4 '>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;