import { NextResponse } from "next/server"
import { connectToMongoDB } from "@/database/mongo-config"
import { Meta } from "@/models/models"


export const POST = async (req) => {

    const {currentTeacher, currentWeek} = await req.json()

    console.log("logging current teacher and current week:", currentTeacher, currentWeek)

    try {
        await connectToMongoDB()

        const teacherNotes = await Meta.find({teacher: currentTeacher}, {_id: 0, [currentWeek]: 1})

        console.log("logging teacherNotes from API:", teacherNotes)

        return NextResponse.json({teacherNotes})

    } catch (error) {
        
        return NextResponse.json({message: error.message})
    }

}