import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="bg-slate-900">
            <Link to="/" className="text-slate-200 ml-auto flex gap-5 text-3xl font-primary"><div className="px-14px">
                Apna Samai</div></Link>
            <div>
                <nav className="flex md:flex-grow flex-row justify-center space-x-12 text-2xl content-center">
                <Link to="/"className="text-slate-200">Home</Link>
                <Link to="/about"className="text-slate-200">About</Link>
                <Link to="/contact" className="text-slate-200">Contact</Link>
                </nav>
                
            </div>
        </div>
    )
}

export default Navbar;

