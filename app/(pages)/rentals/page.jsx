"use client"

import { NewRentalModal } from "@/app/components/NewRentalModal"
import { useState, useEffect } from "react"
import { IoMdAdd } from "react-icons/io";
import { adminDB } from "@/database/firebase-config";
import { collection, onSnapshot, query, doc, deleteDoc, orderBy } from "firebase/firestore"
import { RiDeleteBin6Line } from "react-icons/ri";



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

    const handleDateFormat = (date) => {
      const formattedDate = new Date(date).toLocaleString("en-US", {"month": "short", "day": "numeric", "year": "numeric"})
      return formattedDate
    }

    const handleDelete = async (id) => {
      console.log("logging item from handleDelete:", id)
        const docRef = doc(rentalsRef, id)
        try {
          await deleteDoc(docRef)
          console.log("document successfully deleted!")
        } catch(err) {
          console.log(err.message)
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
    <div className="py-16 w-[85%] mx-auto overflow-y-auto">

        <button className="btn btn-primary btn-sm mb-10" onClick={() => setNewRentalModalOpen(true)}><IoMdAdd size="1.2rem" />New Rental</button>
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
                  <th>DCAM Cost</th>
                  <th>Customer Cost</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {activeRentals && 
                    activeRentals.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.student_name}</td>
                        <td>{item.parent_name}</td>
                        <td>{item.rental_item}</td>
                        <td>{item.serial_num}</td>
                        <td>{handleDateFormat(item.start_date)}</td>
                        <td>{item.billing_date}</td>
                        <td>${item.dcam_cost}</td>
                        <td>${item.customer_cost}</td>
                        <td className="hover:bg-red-200 cursor-pointer" onClick={() => handleDelete(item.id)}><RiDeleteBin6Line className="mx-auto" size="1rem"  /></td>
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