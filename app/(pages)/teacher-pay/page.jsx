"use client"

import { PayTableRow } from "@/app/components/PayTableRow"
import { useState, useEffect } from "react"
import { connectToStaffDB } from "@/database/database"




const TeacherPayPage = () => {

  const [attendanceData, setAttendanceData] = useState([])


  console.log("Logging attendanceData state:", attendanceData)

  useEffect(() => {

    const getAttendanceStatus = async () => {

      try {
        const res = await fetch("/api/get-attendance", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: "Luana"})
        })

        const {metaArray} = await res.json()

        setAttendanceData(metaArray)

      } catch (error) {
          console.log("Error getting response")
      }
    }
  
    getAttendanceStatus()
  
  }, [])
  
  return (
    <div className="py-16 px-12 w-full">
      <table className="mx-auto bg-gray-200">
        <thead className="bg-gray-300">
          <tr>
            <td className="py-2 px-6 font-semibold text-center">Teacher</td>
            <td className="py-2 px-6 font-semibold text-center">Completed</td>
            <td className="py-2 px-6 font-semibold text-center">Total Owed</td>
            <td className="py-2 px-6 font-semibold text-center">Payday</td>
          </tr>
        </thead>
        <tbody>
          {attendanceData?.map((metaDoc, index) => (
            <PayTableRow key={index} metaDoc={metaDoc} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherPayPage