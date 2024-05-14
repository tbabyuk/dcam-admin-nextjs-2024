"use client"

import { useAuthContext } from "@/context/AuthContext"
import Link from "next/link"

const Navbar = () => {


  const {logOut, authenticatedUser} = useAuthContext()

  console.log("logging authenticatedUser from Navbar:", authenticatedUser?.displayName)

  
  return (
    <div className="h-12 bg-primary text-gray-100 px-2 sm:px-10 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0"><img src="/dcam-logo-white-long.png" width="110px" /></Link>
        <div className="flex gap-4 sm:gap-6">
          {authenticatedUser && (<span className="flex items-center text-nowrap">Hello, {authenticatedUser?.displayName}</span>)}
          <img src={authenticatedUser?.displayName === "Heather" ? "/heather_profile.png" : authenticatedUser?.displayName === "Terry" ? "/terry_profile.jpg" : "/avatar1.jpg"} className="h-[34px] rounded-full" />
          {authenticatedUser && (<button className="btn btn-accent btn-outline btn-sm flex items-center text-nowrap" onClick={() => logOut()}>Log Out</button>)}
        </div>
    </div>
  )
}

export default Navbar