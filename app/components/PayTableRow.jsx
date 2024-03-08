"use client"

import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";


export const PayTableRow = ({teacher}) => {

  return (
    <tr>
        <td className="py-2 px-4">{teacher}</td>
        <td className="py-2 px-4"><MdOutlineCheckBoxOutlineBlank size="1.2rem" className="mx-auto" /></td>
        <td className="py-2 px-4"><MdOutlineCheckBox size="1.2rem" className="mx-auto" /></td>
    </tr>
  )
}