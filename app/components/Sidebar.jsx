"use client"

import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";

import { useState } from "react";
import Link from "next/link";


const Sidebar = () => {
  
  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <>
        <div className="h-[calc(100vh-32px)] w-10 bg-dcam-600 py-8 z-10" onMouseEnter={() => setSidebarOpen(true)}>
            <ul className="flex flex-col justify-center items-center">
                <li className="h-[40px] grid items-center"><TbLayoutDashboard color="white" size="1.2rem" /></li>
                <li className="h-[40px] grid items-center"><FaTasks color="white" /></li>
                <li className="h-[40px] grid items-center"><TbReportMoney color="white" size="1.2rem" /></li>
            </ul>
        </div>

        <div className={`h-[calc(100vh-32px)] w-[170px] absolute py-8 bg-dcam-300 ${sidebarOpen ? "left-0" : "-left-[170px]" } duration-300 ease-in-out py-8`} onMouseLeave={() => setSidebarOpen(false)}>
            <ul className="flex flex-col">
                <li className="dashboard-menu-item">
                    <Link href="/dashboard" onClick={() => setSidebarOpen(false)}>Dashboard</Link>
                </li>
                <li className="dashboard-menu-item">
                    <Link href="/todos" onClick={() => setSidebarOpen(false)}>Todos</Link>
                </li>
                <li className="dashboard-menu-item">
                    <Link href="/teacher-pay" onClick={() => setSidebarOpen(false)}>Teacher Pay</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar