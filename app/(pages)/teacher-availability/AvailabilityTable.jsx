"use client"

import { BsCheckCircle, BsXCircle } from "react-icons/bs"



export const AvailabilityTable = ({availability}) => {


    return(
        <table className="table table-zebra w-auto mx-auto">
            <thead>
                <tr className="bg-gray-500 uppercase text-gray-100">
                    <th>Day</th>
                    <th>Time Range</th>
                    <th>Subbing</th>
                    <th>Teaching</th>
                </tr>
            </thead>
            <tbody>
                {availability?.map((item) => (
                    <tr key={item.day} className="">
                        <td>{item.day}</td>
                        <td>{item.from ? `${item.from} - ${item.until}` : "not available"}</td>
                        <td>{item.subbingOkay ? <BsCheckCircle className="text-green-500 mx-auto" size="20px" /> : <BsXCircle  className="text-red-500 mx-auto" size="20px" />}</td>
                        <td>{item.teachingOkay ? <BsCheckCircle className="text-green-500 mx-auto" size="20px" /> : <BsXCircle className="text-red-500 mx-auto" size="20px" />}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}