import React from 'react'
import Diet from '../Assets/diet.jpg'
import Diets from '../Assets/diets.jpg'
import Wm from '../Assets/weight.jpg'
import Ex from '../Assets/ex.jpg'

const cards2 = () => {
  return (
    <div className='flex flex-wrap justify-center items-start mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
        <div className="my-8  flex flex-wrap space-x-0  mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600 ">
      <a href="#" className=" w-80 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gym Equiments</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Weight loss is really important for our health.</p>
<button className='text-white rounded-full bg-yellow-500 px-8 py-2 mt-8 hover:scale-105 duration-300 hover:bg-yellow-900'>Read More</button>
</a>
<a href="#" className="w-80 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<img src={Diet}></img>
</a>
<a href="#" className="w-80 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yoga</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Weight loss is really important for our health.</p>
<button className='text-white rounded-full bg-yellow-500 px-8 py-2 mt-8 hover:scale-105 duration-300 hover:bg-yellow-900'>Read More</button>
</a>
<a href="#" className="w-80 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<img src={Wm}></img>
</a>
    </div>
    <div className="my-8  flex flex-wrap space-x-0  mx-auto  sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
      <a href="#" className="w-80 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Weight Loss</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Weight loss is really important for our health.</p>
<button className='text-white rounded-full bg-yellow-500 px-8 py-2 mt-8 hover:scale-105 duration-300 hover:bg-yellow-900'>Read More</button>
</a>
<a href="#" className="w-80 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<img src={Ex}></img>
</a>
<a href="#" className="w-80 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Healthy Lifestyle</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Weight loss is really important for our health.</p>
<button className='text-white rounded-full bg-yellow-500 px-8 py-2 mt-8 hover:scale-105 duration-300 hover:bg-yellow-900'>Read More</button>
</a>
<a href="#" className="w-80 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<img src={Diets}></img>
</a>
    </div>
    </div>
  );
};

export default cards2
