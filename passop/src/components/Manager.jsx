import React from 'react'

const Manager = () => {
    return (
        <>
            {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}

            <div className="manager bg-slate-600 h-dvh">

                <div className="main-headline p-5 flex flex-col justify-center items-center text-white font-bold">
                    <h1 className='text-3xl'>
                        <span className='text-slate-950 bold'>&lt;</span>
                        <span>Pass</span>
                        <span className='text-slate-950 bold'>OP</span>
                        <span className='text-slate-950 bold'>/&gt;</span>
                    </h1>
                    <p>Your own Password Manager</p>
                </div>

                <div className="inputs flex justify-center items-center flex-col gap-3 p-5">
                    <div className="url">
                        <input className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter website url...' />
                    </div>

                    <div className="rest-inputs flex justify-center items-center gap-2">
                        <input className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter username...' />
                        <input className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter password...' />
                        <span className='absolute right-134 cursor-pointer'>
                            <img width={30} src="/public/eye.svg" alt="show-password" />
                        </span>
                    </div>

                    <div className="save-btn">
                        <button className='font-bold flex justify-center items-center rounded-full px-2 py-1 cursor-pointer text-white bg-slate-900 hover:bg-slate-900 hover:border-slate-900 border-2 border-slate-300'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vjgknpfx.json"
                                trigger="hover"
                                style={{"width":"35px", "height":"35px"}}>
                            </lord-icon>
                            Save
                        </button>
                    </div>
                </div>

                <div className="pass-table flex justify-center items-center flex-col">
                    <h1 className='text-2xl text-white font-bold'>Your Passwords</h1>

                    <div className="pass-table">
                        <table>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>Harry</td>
                                <td>100</td>
                            </tr>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Manager
