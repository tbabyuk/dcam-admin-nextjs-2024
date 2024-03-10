"use client"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"


export default function PagesLayout ({children}) {

    const {authIsReady, authenticatedUser} = useAuthContext()
    const router = useRouter()


    console.log("logging authIsReady from layout:", authIsReady, authenticatedUser)


    if(authIsReady) {
      return (
        <>
          <Navbar />
          <div className="flex">
            <Sidebar />
              {children}
          </div>
        </>
      )
    }

}