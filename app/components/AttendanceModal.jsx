"use client"

import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";



export const AttendanceModal = ({setAttendanceModalOpen, currentTeacher}) => {

  console.log("logging current teacher from AttendanceModal:", currentTeacher)

  const [teacherAttendance, setTeacherAttendance] = useState([])



  useEffect(() => {

    const getTeacherAttendance = async () => {

        try {
            const res = await fetch("/api/get-teacher-attendance", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({currentTeacher})
            })
    
            const {teacherAttendanceArray} = await res.json()

            console.log("logging teacherAttendanceArray from modal:", teacherAttendanceArray)

            setTeacherAttendance(teacherAttendanceArray)
    
        } catch (error) {
            console.log("Something went wrong while fetching teacher attendance:", error.message)
        }
    }

    getTeacherAttendance()


  }, [])

  return (
        <div className="fixed z-50 top-0 left-0 w-full h-[100vh] bg-black bg-opacity-80 overflow-y-auto">
            <MdClose size="4rem" color="white" className="absolute cursor-pointer top-0 right-0" onClick={() => setAttendanceModalOpen(false)} />
            <table className="my-28 mx-auto bg-gray-200 text-[0.8rem] sm:text-[0.9rem]">
                <thead>
                    <tr className="bg-gray-500 text-gray-100">
                        <td className="py-[10px] px-3 sm:px-6 font-semibold">Student</td>
                        <td className="py-[10px] px-3 sm:px-6 font-semibold">Week 1</td>
                        <td className="py-[10px] px-3 sm:px-6 font-semibold">W1 Pay</td>
                        <td className="py-[10px] px-3 sm:px-6 font-semibold">Week 2</td>
                        <td className="py-[10px] px-3 sm:px-6 font-semibold">W2 Pay</td>
                    </tr>
                </thead>
                <tbody>
                    {teacherAttendance?.map((student, index) => (
                        <tr key={index} className="even:bg-gray-300">
                            <td className="py-2 px-3 sm:px-6">{student.name[0].toUpperCase() + student.name.slice(1)}</td>
                            <td className={`py-2 px-3 sm:px-6 ${student.attendance.week1 === "present" ? "text-green-600" : student.attendance.week1 === "counted" ? "text-orange-600" : "text-red-600"}`}>{student.attendance.week1}</td>
                            <td className={`py-2 px-3 sm:px-6 ${student.attendance.week1 === "present" ? "text-green-600" : student.attendance.week1 === "counted" ? "text-orange-600" : "text-red-600"}`}>${student.attendance.week1 === "present" || student.attendance.week1 === "counted" ? student.pay.toFixed(2) : "0.00"}</td>
                            <td className={`py-2 px-3 sm:px-6 ${student.attendance.week1 === "present" ? "text-green-600" : student.attendance.week1 === "counted" ? "text-orange-600" : "text-red-600"}`}>{student.attendance.week2}</td>
                            <td className={`py-2 px-3 sm:px-6 ${student.attendance.week1 === "present" ? "text-green-600" : student.attendance.week1 === "counted" ? "text-orange-600" : "text-red-600"}`}>${student.attendance.week1 === "present" || student.attendance.week1 === "counted" ? student.pay.toFixed(2) : "0.00"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}