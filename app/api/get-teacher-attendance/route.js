import { NextResponse } from "next/server"
import { connectToMongoDB } from "@/database/mongo-config"
import { Student } from "@/models/models"



export const POST = async (req) => {

    const {currentTeacher} = await req.json()

    try {
        await connectToMongoDB()

        const teacherAttendanceArray = await Student.find({teacher: currentTeacher})

        return NextResponse.json({teacherAttendanceArray})

    } catch (error) {
        
        return NextResponse.json({message: error.message})
    }

}