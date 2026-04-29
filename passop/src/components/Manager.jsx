import React from 'react'

const Manager = () => {
    return (
        <>
            {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}

            <div className="manager bg-slate-700 h-dvh">

                <div className="main-headline p-5 flex flex-col justify-center items-center text-white font-bold">
                    <h1 className='text-3xl'>PassOP</h1>
                    <p>Your own Password Manager</p>
                </div>

                <div className="inputs flex justify-center items-center flex-col gap-3 p-5">
                    <div className="url">
                        <input className='bg-slate-300 border-4 border-slate-900 w-2xl px-2 py-1 rounded-full' type="text" placeholder='Enter website url...' />
                    </div>

                    <div className="rest-inputs flex justify-center items-center gap-2">
                        <input className='bg-slate-300 border-4 border-slate-900 w-1xl px-2 py-1 rounded-full' type="text" placeholder='Enter username...' />
                        <input className='bg-slate-300 border-4 border-slate-900 w-1xl px-2 py-1 rounded-full' type="text" placeholder='Enter password...' />
                    </div>

                    <div className="save-btn">
                        <button className='font-bold gap-2 flex justify-center items-center rounded-full p-2 cursor-pointer text-white bg-slate-800 hover:bg-slate-700 border-2 border-slate-300'>
                            <img className='w-7 invert' src="/public/github.svg" alt="github-logo" />
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
