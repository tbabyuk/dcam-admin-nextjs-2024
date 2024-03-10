"use client"

import { useEffect } from "react"
import { useAuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"


const TodosPage = () => {

  const {authenticatedUser} = useAuthContext()
  const router = useRouter()


  useEffect(() => {
    if(!authenticatedUser) {
      router.push("/")
    }
  }, [])


  return (
    <div>TodosPage</div>
  )
}

export default TodosPage