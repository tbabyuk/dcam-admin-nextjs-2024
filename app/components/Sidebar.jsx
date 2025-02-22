"use client"

import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { PiGuitar } from "react-icons/pi";
import { HiOutlineClock } from "react-icons/hi"
import Link from "next/link";



const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
  
  return (
    <div className="flex h-[100vh]">
        <ul className="h-full w-10 py-8 bg-primary flex flex-col justify-start items-center z-20" onMouseEnter={() => setSidebarOpen(true)}>
            <li className="h-[40px] grid items-center"><TbLayoutDashboard color="white" size="1.2rem" /></li>
            <li className="h-[40px] grid items-center"><FaTasks color="white" /></li>
            <li className="h-[40px] grid items-center"><TbReportMoney color="white" size="1.4rem" /></li>
            <li className="h-[40px] grid items-center"><HiOutlineClock color="white" size="1.4rem" /></li>
            <li className="h-[40px] grid items-center"><PiGuitar color="white" size="1.4rem" /></li>
        </ul>

        <div className={`h-full w-[190px] py-8 bg-secondary absolute ${sidebarOpen ? "left-0" : "-left-[190px]"} duration-300 ease-in-out py-8 z-10`} onMouseLeave={() => setSidebarOpen(false)}>
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
                    <Link href="/teacher-availability" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Teacher Availability</Link>
                </li>
                <li>
                    <Link href="/rentals" className="dashboard-menu-item" onClick={() => setSidebarOpen(false)}>Rentals</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar