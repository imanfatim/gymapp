import Image from '../Assets/gym.jpg'
export default function section2(){
    return(
    <div className="bg-zinc-800 flex py-5 w-full md-flex-row  justify-center items-start mx-auto   mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600 "> 
       
            <div className="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                <img className="h-auto  max-w-xl rounded-lg pt-6 " src={Image}></img>
                
                   
            </div>
            <div className=" max-w-screen-xl mx-auto ml-2 sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                <h4 className="text-white font-Roboto text-5xl mt-4">Advance Calculator</h4>
                
               <form class="max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
              
  <label for="gender" class="block mb-2 text-base font-medium text-white sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">Gender</label>
  <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
   
  </select>
  <div class="mt-6 grid md:grid-cols-2 md:gap-6 sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
    <div class="relative z-0 w-full mb-5 group sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
    <label for="floating_first_name" class="block mb-2 text-base font-medium text-white">Age</label>
        <input type="text" name="floating_first_name" id="floating_first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
" placeholder="20 " required />
        
    </div>
    <div class="relative z-0 w-full mb-5 group">
    <label for="floating_first_name" class="block mb-2 text-base font-medium text-white">Weight</label>
        <input type="text" name="floating_first_name" id="floating_first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
" placeholder=" 80kg" required />
        </div>
  </div>
  <div class="pt-3 grid md:grid-cols-2 md:gap-8">
    <div class="relative z-0 w-full mb-5 group">
    <label for="floating_first_name" class="block mb-2 text-base font-medium text-white">Height</label>
        <input type="text" name="floating_first_name" id="floating_first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
" placeholder=" Height " required />
        
    </div>
    <div class="relative z-0 w-full mb-5 group">
    <button className='text-white rounded-lg bg-yellow-500 px-8 py-2 mt-8 hover:scale-105 duration-300 hover:bg-yellow-900'>Calculate</button>

        </div>
  </div>
</form>


                    
            </div>
        </div>
    )
}