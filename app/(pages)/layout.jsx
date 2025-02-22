"use client"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import { useAuthContext } from "@/context/AuthContext"


export default function PagesLayout ({children}) {

    const {authIsReady} = useAuthContext()
    const [sidebarOpen, setSidebarOpen] = useState(false)


    if(authIsReady) {
      return (
        <>
          <Navbar />
          <div className="flex">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="w-full h-[100vh]" onClick={() => setSidebarOpen(false)}>
              {children}
            </div>
          </div>
        </>
      )
    }

}