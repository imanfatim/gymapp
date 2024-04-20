import React from 'react'
import HeadImage from '../Assets/img.jpg';

const header = () => {
  return (
<div>
    <div className='relative bg-cover bg-center flex justify-center items-start sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
        
        <img  src={HeadImage}  alt="Profile Picture " className='w-full h-80 object-cover absolute mix-blend-overlay'/>
        
        <div className='p-24  sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
            <h1 className='text-white text-6xl font-bold text-center'>
                Change Your GYM
            </h1>
            <h2 className='text-white text-3xl font-light mt-4 text-center'>
                Workout with the best in the industry

            </h2>

        </div>

    </div>
</div>

  );
};

export default header
