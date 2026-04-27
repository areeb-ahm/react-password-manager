import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between text-white px-10 py-5 bg-slate-900'>
            <div className="logo font-bold text-3xl">PassOP</div>

            <div className="github-btn">
                <button className='font-bold gap-2 flex justify-center items-center rounded-full p-2 cursor-pointer hover:bg-slate-800 border-2'>
                    <img className='w-7 invert' src="/public/github.svg" alt="github-logo" />
                    GitHub
                </button>
            </div>
        </nav>
    )
}

export default Navbar
