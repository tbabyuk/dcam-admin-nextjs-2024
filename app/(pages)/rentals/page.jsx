"use client"

import { NewRentalModal } from "@/app/components/NewRentalModal"
import { useState, useEffect } from "react"
import { IoMdAdd } from "react-icons/io";
import { adminDB } from "@/database/firebase-config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { RentalsTableRow } from "@/app/components/RentalsTableRow";



const rentalsRef = collection(adminDB, "rentals");


const RentalsPage = () => {

    const [newRentalModalOpen, setNewRentalModalOpen] = useState(false);
    const [activeRentals, setActiveRentals] = useState([]);

    const handleCloseNewRentalModal = (e) => {
        console.log("logging target classname:", e.target.tagName)
        if(e.target.tagName === "DIV" || e.target.tagName === "SPAN") {
          setNewRentalModalOpen(false)
        }
      }

    useEffect(() => {

      console.log("useEffect fired")

      const q = query(rentalsRef, orderBy("created_at", "desc"));
  
      const unsub = onSnapshot(q, snapshot => {

          const activeRentalsArray = [];
    
          snapshot.forEach((doc) => {
              console.log("logging rental docs:", doc.data())
              activeRentalsArray.push({id: doc.id, ...doc.data()})
          })

          setActiveRentals(activeRentalsArray);
      })
  
      return () => {
          unsub()
        }
  
  }, [])
  

  return (
    <div className="py-16 w-[80%] mx-auto overflow-y-auto">

        <button className="btn btn-accent btn-outline btn-sm mb-10" onClick={() => setNewRentalModalOpen(true)}><IoMdAdd size="1.2rem" />New Rental</button>
          <div className="overflow-x-auto mx-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-gray-500 uppercase text-gray-100">
                  <th>#</th>
                  <th>Student</th>
                  <th>Parent</th>
                  <th>Rental Item</th>
                  <th>Serial #</th>
                  <th>Rental start</th>
                  <th>Billing Date</th>
                  <th>DCAM Cost</th>
                  <th>Customer Cost</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {activeRentals && 
                    activeRentals.map((item, index) => (
                      <RentalsTableRow key={item.id} item={item} index={index} />
                    ))}
              </tbody>
            </table>
          </div>
          {newRentalModalOpen && 
            <NewRentalModal handleCloseNewRentalModal={handleCloseNewRentalModal} setNewRentalModalOpen={setNewRentalModalOpen} />
          }
    </div>
  )
}

export default RentalsPage