"use client"

import { useState } from "react";
import { FaPerson } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { PiGuitar } from "react-icons/pi";
import { addSubscriptionAction } from "../actions";




export const NewSubscriberModal = ({handleCloseNewSubscriberModal, setNewSubscriberModalOpen, setSubscribeSuccess, setSubscribeError}) => {


  const [newSubscriberObject, setNewSubscriberObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instrument: "",
  })
  const [isPending, setIsPending] = useState(false)


  console.log("Logging newRentalObject:", newSubscriberObject)


  const handleChange = (e) => {
    console.log("handleChange fired", e)
    setNewSubscriberObject(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }


  const handleSubscribe = async (e) => {
    setIsPending(true)
    e.preventDefault();
    try {
        await addSubscriptionAction(newSubscriberObject)
        console.log("Success!")
        setSubscribeSuccess(`${newSubscriberObject.email} was successfully added to Mailchimp!`)
    } catch (error) {
        setSubscribeError(`Oops, something went wrong with adding ${newSubscriberObject.email} to Mailchimp. Please ask Terry for help!`)
        console.log("Error subscribing new user:", error.message)
    } finally {
        setIsPending(false)
        setNewSubscriberModalOpen(false)
    }
  }


  return (
        <div className="overlay fixed z-50 top-0 left-0 w-full h-[100vh] bg-black bg-opacity-80 overflow-y-auto" data-role="modal" onClick={(e) => handleCloseNewSubscriberModal(e)}>
            <span className="exit absolute cursor-pointer top-1 right-5 text-gray-100 font-semibold text-[2.5rem]" data-role="modal">&#10005;</span>
            <form className="form-control w-[380px] max-w-[90%] mt-[80px] bg-gray-100 py-5 px-6 md:px-10 rounded-md mx-auto" onSubmit={handleSubscribe}>
                <h2 className="text-lg font-semibold text-gray-600 text-center pb-6">New Subscriber Form</h2>
                <label className="input h-10 input-bordered flex items-center gap-4 mb-4">
                    <FaPerson className="text-gray-500" size="1.2rem" />
                    <input 
                        type="text"
                        className="grow text-sm"
                        placeholder="first name"
                        name="firstName"
                        value={newSubscriberObject.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="input h-10 input-bordered flex items-center gap-4 mb-4">
                    <FaPerson className="text-gray-500" size="1.2rem" />
                    <input 
                        type="text" 
                        className="grow text-sm" 
                        placeholder="last name" 
                        name="lastName"
                        value={newSubscriberObject.lastName}
                        onChange={handleChange}
                        required 
                    />
                </label>
                <label className="input h-10 input-bordered flex items-center gap-4 mb-4">
                    <MdOutlineEmail className="text-gray-500" size="1.2rem" />
                    <input 
                        type="email" 
                        className="grow text-sm" 
                        placeholder="email" 
                        name="email"
                        value={newSubscriberObject.email}
                        onChange={handleChange}
                        required 
                    />
                </label>
                <label className="input h-10 input-bordered flex items-center gap-4 mb-4">
                    <MdOutlinePhone className="text-gray-500" size="1.2rem" />
                    <input 
                        type="text" 
                        className="grow text-sm" 
                        placeholder="phone number"
                        name="phone"
                        value={newSubscriberObject.phone}
                        onChange={handleChange}
                        required 
                    />
                </label>
                <label className="input h-10 input-bordered flex items-center gap-4 mb-4">
                    <PiGuitar className="text-gray-500" size="1.2rem" />
                    <select 
                        className="w-full h-full text-sm outline-none"
                        name="instrument"
                        value={newSubscriberObject.instrument} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled>instrument</option>
                        <option value="piano">piano</option>
                        <option value="guitar">guitar</option>
                        <option value="ukulele">ukulele</option>
                        <option value="drums">drums</option>
                        <option value="voice">voice</option>
                        <option value="music theory">music theory</option>
                        <option value="not sure yet">not sure yet</option>
                        <option value="band experience">band experience</option>
                        <option value="musical beginnings">musical beginnings</option>
                    </select>
                </label>
                <button className="btn btn-md btn-primary mt-4" disabled={isPending}>{isPending ? "Please wait..." : "Add Subscriber"}</button>
            </form>
        </div>
    )
}