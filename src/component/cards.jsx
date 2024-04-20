import imgt from '../Assets/treadmill.png'
import dum from '../Assets/dumbell.jpg'
import gym from '../Assets/gy.png'
import pic from '../Assets/pic.jpg'
export default function cards(){
    const header = "Hello this is Atomcamp";
    
    return(
        <div className='flex  items-center justify-between  sm:border-lime-700 md:border-amber-400 lg:border-indigo-600'>
        <div className="max-w-screen-xl mx-auto ">
            {/* <div>
                <h4>
                    {header}
                </h4>
                <p>Welcome to the card component!</p>
                <button>Learn More</button>
            </div> */}
            {/*Boxes*/}
            <h1 className='text-center text-4xl '> Latest Products</h1>
            <div className="my-10   flex  ">
                <div className="border rounded-md relative  border-4 items-center justify-between mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                   <img className='h-40 w-40' src={imgt}></img>
                </div>
                <div className="border rounded-md relative  border-4 items-center justify-between mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                    <img className='h-40 w-40' src={dum}></img>
                </div>
                <div className="border rounded-md relative  border-4 items-center justify-between mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                   <img className='h-40 w-40' src={gym}></img>
                </div>
                <div className="border rounded-md relative border-4 items-center justify-between mx-auto sm:border-lime-700 md:border-amber-400 lg:border-indigo-600">
                   <img className='h-40 w-40' src={pic}></img>
                </div>
            </div>
        </div>
        </div>
    )
}