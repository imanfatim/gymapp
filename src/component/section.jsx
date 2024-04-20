import Image from '../Assets/gym.jpg'
export default function section(){
    return(
    <section className=" flex py-5 w-full md-flex-row  justify-center items-start mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600"> 
       
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                <img className="h-auto max-w-xl rounded-lg " src={Image}></img>
                
                   
            </div>
            <div className=" mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600 max-w-screen-xl mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                <h4 className=" font-Roboto text-5xl mt-4 ">Get Ready to Reach <br />
Your Fitness Goals</h4>
                
                <p className="mt-6 text-lg ">Combining aerobic exercise with other kinds of exercises like strength <br /> training with weights and stretching keeps muscles, ligaments, joints, and tendons healthy,<br /> flexible, and strong, so when one becomes older, 
He is stronger and <br />has less risk of being out of balance and falling causing fractures or other injuries


                </p>
                    <button className=' rounded-full bg-yellow-500 px-8 py-4 mt-6 hover:scale-105 duration-300 hover:bg-yellow-900'>Buy Now</button>
            </div>
        </section>
    )
}