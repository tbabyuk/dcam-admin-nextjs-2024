"use client"

import { useState, useEffect } from "react"
import { useAuthContext } from "@/context/AuthContext";
import { AvailabilityTable } from "./AvailabilityTable";


const TeacherAvailabilityPage = () => {

    const {authenticatedUser} = useAuthContext()
    const [teachersList, setTeachersList] = useState([])
    const [availability, setAvailability] = useState([])


    
    const getTeacherAvailability = async (teacher) => {
        try {
            const res = await fetch("/api/get-availability", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user: teacher, queryType: "getAvailability"})
            })
            const {teacherAvailability} = await res.json()
            setAvailability(teacherAvailability)
    
          } catch (error) {
              console.log("Error getting response")
          }
    }


    const getTeachersList = async () => {
        try {
            const res = await fetch("/api/get-availability", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({user: authenticatedUser.displayName, queryType: "getAllTeachers"})
            })
            const {usersArray} = await res.json()
            const teachers = usersArray.map(user => user.name)
            setTeachersList(teachers)    
          } catch (error) {
              console.log("Error getting response")
          }
    }

    useEffect(() => {
        getTeachersList()
    }, [])


  return (
    <div className="py-16 w-[80%] mx-auto text-center overflow-y-auto">
        <p className="mb-3">Select teacher to see their weekly availability:</p>
        <select 
            className="ps-2 w-[150px] h-9 mb-9 border-2 border-gray-200 rounded text-sm" 
            onChange={(e) => getTeacherAvailability(e.target.value)}
        >
            {teachersList && teachersList.map(teacher => (
                <option key={teacher}>{teacher}</option>
            )) 
        }
        </select>
        <AvailabilityTable availability={availability} />
    </div>
  )
}

export default TeacherAvailabilityPage