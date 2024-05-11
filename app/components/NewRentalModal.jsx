"use client"

import { MdClose } from "react-icons/md";
import { useState } from "react";


export const NewRentalModal = ({handleCloseNewRentalModal}) => {

  const [newRentalObject, setNewRentalObject] = useState({
    student_name: "",
    parent_name: "",
    rental_item: "",
    serial_num: "",
    start_date: "",
    billing_date: ""
  })


  const handleChange = (e) => {
    setNewRentalObject(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("/api/post-new-rental", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRentalObject)
        });
        if(!res.ok) {
            throw new Error("Failed to submit form")
        }
        console.log("Form submitted!", res)

    } catch (error) {
        console.error("Error submitting form:", error.message)
    }
  }


  return (
        <div className="overlay fixed z-50 top-0 left-0 w-full h-[100vh] bg-black bg-opacity-80 overflow-y-auto" onClick={(e) => handleCloseNewRentalModal(e)}>
            <MdClose size="4rem" color="white" className="exit absolute cursor-pointer top-3 right-3" />
            <form className="form-control w-[380px] max-w-[90%] mt-[50px] bg-gray-100 py-5 px-10 mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold text-center pb-8">New Rental Form</h2>
                <label>
                    Student Name:
                    <input 
                        type="text"
                        name="student_name"
                        className="form-input w-[100%] bg-gray-200 mt-1" 
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Parent Name:
                    <input 
                        type="text"
                        name="parent_name"
                        className="form-input w-[100%] bg-gray-200 mt-1"
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Rental Item:
                    <select
                        name="rental_item"
                        className="form-input w-[100%] bg-gray-200 mt-1" 
                        onChange={handleChange}>
                            <option value="guitar">guitar</option>
                            <option value="keyboard">keyboard</option>
                            <option value="ukulele">ukulele</option>
                    </select>
                </label>
                <label>
                    Serial #:
                    <input 
                        type="text"
                        name="serial_num"
                        className="form-input w-[100%] bg-gray-200 mt-1"
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Rental Start Date:
                    <input 
                        type="date"
                        name="start_date"
                        className="form-input w-[100%] bg-gray-200 mt-1"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Monthly Billing Date:
                    <input 
                        type="text"
                        name="billing_date"
                        className="form-input w-[100%] bg-gray-200 mt-1" 
                        placeholder="e.g. 5th of each month"
                        onChange={handleChange}
                    />
                </label>
                <button className="bg-green-600 hover:bg-green-700 py-2 rounded text-gray-100">Submit</button>
            </form>
            <div>I am a modal</div>
        </div>
    )
}