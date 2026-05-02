import React, { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const eyeRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const pass = useRef();
    const [passwordArr, setpasswordArr] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            try {
                const parsed = JSON.parse(passwords);
                // Ensure we only set the state if the result is actually an array
                if (Array.isArray(parsed)) {
                    setpasswordArr(parsed);
                }
            } catch (error) {
                console.error("Failed to parse passwords from localStorage:", error);
                // If it's corrupted, just clear it so it doesn't crash again
                localStorage.removeItem("passwords");
            }
        }
    }, []);



    const handleEye = () => {
        // alert("onclick fired")
        if (eyeRef.current.src.includes("eye.svg")) {
            eyeRef.current.src = "eye-crossed.png";
            pass.current.type = "password";
        } else {
            eyeRef.current.src = "eye.svg";
            pass.current.type = "text";
        }
    }

    const handleForm = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        // 1. Create the new updated list first
        const newPasswords = [...passwordArr, form];

        // 2. Update the UI state
        setpasswordArr(newPasswords);

        // 3. Update the storage using the exact same list
        localStorage.setItem("passwords", JSON.stringify(newPasswords));

        // 4. Reset the form so the user can type a new one
        setform({ site: "", username: "", password: "" });
    };



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
                        <input value={form.site} name='site' onChange={handleForm} className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter website url...' />
                    </div>

                    <div className="rest-inputs flex justify-center items-center gap-2">
                        <input value={form.username} name='username' onChange={handleForm} className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter username...' />
                        <input ref={pass} value={form.password} name='password' onChange={handleForm} className='bg-slate-300 border-4 border-slate-900 w-full px-2 py-1 rounded-full' type="text" placeholder='Enter password...' />
                        <span onClick={handleEye} className='absolute right-134 cursor-pointer'>
                            <img ref={eyeRef} width={25} src="eye.svg" alt="show-password" />
                        </span>
                    </div>

                    <div className="save-btn">
                        <button onClick={handleSave} className='font-bold flex justify-center items-center rounded-full px-2 py-1 cursor-pointer text-white bg-slate-900 hover:bg-slate-900 hover:border-slate-900 border-2 border-slate-300'>
                            <lord-icon
                                src="https://cdn.lordicon.com/vjgknpfx.json"
                                trigger="hover"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon>
                            Save
                        </button>
                    </div>
                </div>

                <div className="pass-table flex justify-center items-center flex-col gap-5">
                    <h1 className='text-2xl text-white font-bold'>Your Passwords</h1>

                    {passwordArr.length === 0 && <div>No passwords to show</div>}

                    {passwordArr.length != 0 && <div className="pass-table">
                        <table className="table-auto text-white rounded-md overflow-hidden">
                            <thead className='bg-slate-900'>
                                <tr>
                                    <th className='px-20 py-2'>Site</th>
                                    <th className='px-20 py-2'>Username</th>
                                    <th className='px-20 py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-slate-700'>
                                {passwordArr.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='text-center px-20 py-2'>{item.site}</td>
                                        <td className='text-center px-20 py-2'>{item.username}</td>
                                        <td className='text-center px-20 py-2'>{item.password}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Manager
