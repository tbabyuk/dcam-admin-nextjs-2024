"use client"

import { NewRentalModal } from "@/app/components/NewRentalModal"
import { useState, useEffect } from "react"
import { IoMdAdd } from "react-icons/io";



const RentalsPage = () => {

    const [newRentalModalOpen, setNewRentalModalOpen] = useState(false);
    const [activeRentals, setActiveRentals] = useState([]);

    const handleCloseNewRentalModal = (e) => {
        if(e.target.tagName === "DIV" || e.target.tagName === "path" || e.target.tagName === "svg") {
          setNewRentalModalOpen(false)
        }
      }

    const handleDateFormat = (date) => {
      const formattedDate = new Date(date).toLocaleString("en-US", {"month": "short", "day": "numeric", "year": "numeric"})
      return formattedDate
    }

    useEffect(() => {

      const getActiveRentals = async () => {

        console.log("getActiveRentals from useEffect fired!!!!!!!!!!!!!!!!!!!!!!!!!!")
  
        try {
  
          const res = await fetch("/api/get-rentals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({secret: "chocolate"})
          })
  
          const {activeRentals} = await res.json()

          const activeItemsArray = [...activeRentals]

          setActiveRentals(activeItemsArray)
  
          console.log("Logging active rentals received from API:", activeRentals)
  
        } catch (error) {
            console.log("Error getting response")
        }
      }
    
      getActiveRentals()
  
    }, [])


  return (
    <div className="py-16 w-[80%] mx-auto overflow-y-auto">

        <button className="btn btn-accent btn-sm mb-10" onClick={() => setNewRentalModalOpen(true)}><IoMdAdd size="1.2rem" />Add New Rental</button>
          <div className="overflow-x-auto mx-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-secondary text-gray-100">
                  <th>#</th>
                  <th>Student</th>
                  <th>Parent</th>
                  <th>Rental Item</th>
                  <th>Serial #</th>
                  <th>Rental start date</th>
                  <th>Billing Date</th>
                </tr>
              </thead>
              <tbody>
                {activeRentals && 
                    activeRentals.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.student_name}</td>
                        <td>{item.parent_name}</td>
                        <td>{item.rental_item}</td>
                        <td>{item.serial_num}</td>
                        <td>{handleDateFormat(item.start_date)}</td>
                        <td>{item.billing_date}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          {newRentalModalOpen && 
            <NewRentalModal handleCloseNewRentalModal={handleCloseNewRentalModal} />
          }
    </div>
  )
}

export default RentalsPage