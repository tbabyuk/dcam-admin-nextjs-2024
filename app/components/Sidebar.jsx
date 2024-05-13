"use client"

import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { PiGuitar } from "react-icons/pi";



import { useState } from "react";
import Link from "next/link";


const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <>
        <div className="h-[calc(100vh-48px)] bg-primary min-w-10 py-8 z-20" onMouseEnter={() => setSidebarOpen(true)}>
            <ul className="flex flex-col justify-center items-center">
                <li className="h-[40px] grid items-center"><TbLayoutDashboard color="white" size="1.2rem" /></li>
                <li className="h-[40px] grid items-center"><FaTasks color="white" /></li>
                <li className="h-[40px] grid items-center"><TbReportMoney color="white" size="1.4rem" /></li>
                <li className="h-[40px] grid items-center"><PiGuitar color="white" size="1.4rem" /></li>
            </ul>
        </div>

        <div className={`h-[calc(100vh-48px)] w-[170px] absolute py-8 bg-secondary ${sidebarOpen ? "left-0" : "-left-[170px]"} duration-300 ease-in-out py-8 z-10`} onMouseLeave={() => setSidebarOpen(false)}>
            <ul className="flex flex-col">
                <li>
                    <Link href="/dashboard" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
                </li>
                <li>
                    <Link href="/todos" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Todos</Link>
                </li>
                <li>
                    <Link href="/teacher-pay" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Teacher Pay</Link>
                </li>
                <li>
                    <Link href="/rentals" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Rentals</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar