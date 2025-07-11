"use client";

const buttonStyles = "m-1 p-1 text-xl rounded-xl bg-slate-500 hover:bg-slate-300";

export default function Navbar() {
    <div className="justify-between m-2 p-1">
        <h1 className="m-2 text-2xl">Scrum Lords</h1>
        <nav>
            <a href="#about" className={buttonStyles}>About</a>  
            <a href="#work" className={buttonStyles}>Work</a>   
        </nav>
    </div>
}