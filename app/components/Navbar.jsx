"use client"

import { useAuthContext } from "@/context/AuthContext"


const Navbar = () => {


  const {logOut, authenticatedUser} = useAuthContext()

  console.log("logging authenticatedUser from Navbar:", authenticatedUser)

  
  return (
    <div className="h-12 bg-dcam-600 text-gray-100 px-9 flex justify-between items-center">
        <img src="/dcam-logo-white-long.png" width="100px" />
        <div className="flex gap-4">
          {authenticatedUser && (<span className="flex items-center mr-4">Hello, {authenticatedUser.displayName}</span>)}
          <img src="/avatar1.jpg" className="h-[34px] rounded-full" />
          {authenticatedUser && (<button className="flex items-center" onClick={() => logOut()}>Log Out</button>)}
        </div>
    </div>
  )
}

export default Navbar