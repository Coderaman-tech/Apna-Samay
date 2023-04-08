import { Link } from "react-router-dom";


function Navbar(props) {

    return (
        <div className="bg-black h-20">
            {/* <img src="logo.gif" alt="logo" className="rounded-full w-8 h-8 ml-10"/> */}
            <Link to="/" className=" py-7 ml-14 text-sky-400 text-4xl font-bolder">
                Apna Samay</Link>
            <nav style={{ float: 'right' }} className='my-7 font-medium text-2xl flex space-x-8 mr-8 text-slate-200'>
                <Link to="/" className="">Home</Link>
                <Link to="/about" className="">About</Link>
                <Link to="/contact" className="">Contact</Link>
                <div>
                    <div className="flex">
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                               
                                readOnly
                            />
                            <div
                                onClick={props.toggleMode}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"
                            ></div>
                            <span className="ml-2 text-sm ">
                                {props.modeText}
                            </span>
                        </label>
                    </div>
                    </div>
            </nav>


        </div>
    )
}

export default Navbar;

