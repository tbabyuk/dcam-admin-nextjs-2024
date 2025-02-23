"use client"

import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { useState } from "react"
import { useAuthContext } from "@/context/AuthContext"


export default function PagesLayout ({children}) {

    const {authIsReady} = useAuthContext()
    const [sidebarOpen, setSidebarOpen] = useState(false)


    if(authIsReady) {
      return (
        <div className="h-full relative">
          {/* Sidebar overlay */}
          <div className={`${sidebarOpen && "fixed h-full w-full bg-black/50 cursor-pointer"}`} onClick={() => setSidebarOpen(false)}>
            {/* Sidebar container */}
            <div className={`fixed top-0 left-0 h-full w-[190px] bg-primary transition-transform duration-300 ease-in-out transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-[60]`}>
              <Sidebar />
            </div>
          </div>
          <div className="md:ps-[190px]">
            <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <main className="h-[calc(100vh-50px)]">
              {children}
            </main>
          </div>
        </div>
      )
    }

}