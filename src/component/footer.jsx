import React from 'react'

const footer = () => {
  return (
    <div className='flex py-5 w-full md-flex-row  justify-center items-start mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
         <div className="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
         <h4 className=" font-Roboto text-4xl mt-4 mx-auto"><span className="text-yellow-400 text-4xl font-Poppins mx-auto">Gym</span>Mini <span className="text-yellow-400 text-4xl mx-auto font-Poppins">Store</span></h4>
                
                <p className="mt-6 text-lg mx-auto">Exercise and fit yourself <br />
                This is Best Store For you

                </p>
      
    </div>
    <div className="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
         <h4 className=" font-Roboto text-4xl mt-4 text-bold">Information</h4>
                
                <p className="mt-6 text-lg ">Home <br /> About Us <br /> Store
                </p>
      
    </div>
    <div className="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
         <h4 className=" font-Roboto text-4xl mt-4 text-bold">Support</h4>
                
                <p className="mt-6 text-lg ">Blog <br /> Reviews <br /> Products
                </p>
      
    </div>
    <div className="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
         <h4 className=" font-Roboto text-4xl mt-4 text-bold">Newsletter</h4>
                
                <p className="mt-6 text-lg ">Subscribe to our newsletter and amazing new updates
                </p>
                <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                <button className=' rounded-full bg-yellow-500 px-8 py-4 mt-6 hover:scale-105 duration-300 hover:bg-yellow-900'>Subscribe</button>
      
    </div>
    
    </div>
  )
}

export default footer
