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
    <div className="py-16 px-16 w-full overflow-y-auto">
        <button className="btn btn-sm bg-dcam-300 text-gray-100 hover:bg-dcam-600" onClick={() => setNewRentalModalOpen(true)}><IoMdAdd size="1.2rem" />Add New Rental</button>
        {activeRentals && 
          activeRentals.map((item) => (<p key={item._id}>{item.rental_item}</p>))
        }
        {newRentalModalOpen && 
          <NewRentalModal handleCloseNewRentalModal={handleCloseNewRentalModal} />
        }
    </div>
  )
}

export default RentalsPage