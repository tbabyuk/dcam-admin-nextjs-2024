"use client"

import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";


export const PayTableRow = ({metaDoc}) => {
  
  const {teacher, week2Submitted} = metaDoc;

  return (
    <tr>
        <td className="py-2 px-4">{teacher[0].toUpperCase() + teacher.slice("1")}</td>
        <td className="py-2 px-4">{!week2Submitted ? <MdRadioButtonUnchecked size="1.2rem" className="mx-auto" /> : <MdRadioButtonChecked size="1.2rem" color="green" className="mx-auto" />}</td>
    </tr>
  )
}