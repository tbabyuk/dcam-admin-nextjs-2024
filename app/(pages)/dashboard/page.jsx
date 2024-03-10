"use client"

import { useEffect } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"


const Dashboard = () => {

  const {authenticatedUser} = useAuthContext()
  const router = useRouter()

  console.log("the authenticated user is:", authenticatedUser)
  
  const dateString = "2024-03-01T05:00:00.000Z"


  const date = new Date(dateString)

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDate = date.toLocaleString('en-US', options);

  console.log(date, formattedDate)


  useEffect(() => {
    if(!authenticatedUser) {
      router.push("/")
    }
  }, [])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard