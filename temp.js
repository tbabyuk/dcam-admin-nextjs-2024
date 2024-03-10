import { adminAuth } from "@/database/firebase-config"
import { NextResponse } from "next/server"


// limit middleware to only these paths
export const config = { matcher: ["/dashboard"] };


console.log("logging auth from middleware..............:", adminAuth.currentUser)

const name = "terry"
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {


    if(!name) {
        console.log("Must be logged in to access this route")
        return NextResponse.redirect(new URL('/', request.url))
    } else {
        return NextResponse.next()

    }
}