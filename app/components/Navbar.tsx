"use client";

const buttonStyles = "m-1 p-3 text-xl rounded-xl bg-slate-500 hover:bg-slate-300";

export default function Navbar() {
    return(
        <div className="flex justify-between m-2 p-1">
            <h1 className="m-2 text-2xl">Scrum Lords</h1>
            <nav className="p-2">
                <a href="#about" className={buttonStyles}>About</a>  
                <a href="#work" className={buttonStyles}>Work</a>   
            </nav>
        </div>
    );
}