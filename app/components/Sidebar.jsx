"use client"

import { TbLayoutDashboard } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { PiGuitar } from "react-icons/pi";
import { HiOutlineClock } from "react-icons/hi"
import Link from "next/link";
import Image from "next/image";



const routes = [
    {
        label: "Dashboard",
        icon: <TbLayoutDashboard size="1.2rem" />,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Tasks",
        icon: <FaTasks size="1.2rem" />,
        href: "/todos",
        color: "text-pink-700"
    },
    {
        label: "Teacher Pay",
        icon: <TbReportMoney size="1.2rem" />,
        href: "/teacher-pay",
        color: "text-purple-600"
    },
    {
        label: "Teacher Availability",
        icon: <HiOutlineClock size="1.2rem" />,
        href: "/teacher-availability",
        color: "text-amber-600"
    },
    {
        label: "Rentals",
        icon: <PiGuitar size="1.2rem" />,
        href: "/rentals",
        color: "text-emerald-500"
    }
]


export const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
  
  return (
    <div className="flex h-[100vh]">
        <div className="py-3 flex-1">
            <Link href="/dashboard" className="flex justify-center items-center mb-14">
                <Image
                    alt="logo"
                    src="/dcam-logo-white-long.png"
                    width={130}
                    height={80}
                />
            </Link>
            <ul className="space-y-1 text-white/80">
                {routes.map(route => (
                    <Link href={route.href} className={`flex items-center flex-1 text-sm p-3 justify-start font-medium cursor-pointer hover:text-gray-100 hover:bg-white/10 transition"}`}>
                        <span className="mr-2">{route.icon}</span>{route.label}
                    </Link>
                ))}
            </ul>
        </div>
    </div>
  )
}