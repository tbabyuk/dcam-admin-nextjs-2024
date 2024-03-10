"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/database/config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "@/context/AuthContext"


export const LoginForm = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const {logIn, error} = useAuthContext()


  const handleLogin = async (e) => {
    e.preventDefault()
    logIn(email, password)
  }

  return (
        <form className="flex flex-col w-[330px] bg-black bg-opacity-30 text-gray-100 rounded-md mx-auto px-10 py-8" onSubmit={handleLogin}>
            <h2 className="text-xl text-center mt-2 mb-6">Staff Login</h2>
            <label>
                <span className="block mb-1">Email:</span>
                <input 
                    type="email" 
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
            </label>
            <label>
                <span className="block mb-1">Password:</span>
                <input 
                    type="password" 
                    className="w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>
            <button className="bg-green-600 hover:bg-green-700 mt-3 py-2 text-gray-100 rounded">Log In</button>
            <div className="text-red-500 text-sm mt-2 h-4">{error && error}</div>
        </form>
    )
}