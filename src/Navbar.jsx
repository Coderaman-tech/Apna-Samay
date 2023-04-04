import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="bg-black h-20">
                {/* <img src="logo.gif" alt="logo" className="rounded-full w-8 h-8 ml-10"/> */}
                <Link to="/" className=" py-7 ml-14 text-sky-400 text-4xl font-bolder">
                Apna Samay</Link>
                <nav style={{float:'right'}} className='my-7 font-medium text-2xl flex space-x-8 mr-8'> 
                <Link to="/"className="text-slate-200">Home</Link>
                <Link to="/about"className="text-slate-200">About</Link>
                <Link to="/contact" className="text-slate-200">Contact</Link>
                </nav>
               
                
        </div>
    )
}

export default Navbar;

