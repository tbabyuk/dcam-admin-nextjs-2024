"use client"

import { PayTableRow } from "@/app/components/PayTableRow"
import { useState, useEffect } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"




const TeacherPayPage = () => {

  const [attendanceData, setAttendanceData] = useState([])
  const {authenticatedUser} = useAuthContext()
  const router = useRouter()


  console.log("Logging attendanceData state:", attendanceData)



  useEffect(() => {
    if(!authenticatedUser) {
      router.push("/")
    }
  }, [])

  
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
    <div className="py-16 px-6 w-full">
      <table className="mx-auto bg-gray-200 text-[0.8rem] sm:text-[0.9rem]">
        <thead>
          <tr className="bg-gray-500 text-gray-100">
            <td className="py-[10px] px-3 sm:px-6 font-semibold text-center">Teacher</td>
            <td className="py-[10px] px-3 sm:px-6 font-semibold text-center">Status</td>
            <td className="py-[10px] px-3 sm:px-6 font-semibold text-center">Pay</td>
            <td className="py-[10px] px-3 sm:px-6 font-semibold text-center">Payday</td>
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