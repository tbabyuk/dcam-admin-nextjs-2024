import { PayTableRow } from "@/app/components/PayTableRow"

const teachersArray = ["Aaron", "Raul", "Giancarlo", "Linda", "Taisiya", "Senya"]


const TeacherPayPage = () => {
  return (
    <div className="py-16 px-12 w-full">
      <table className="mx-auto bg-gray-200">
        <thead className="bg-gray-300">
          <tr>
            <td className="py-2 px-4">Teacher</td>
            <td className="py-2 px-4">Not Started</td>
            <td className="py-2 px-4">Submitted</td>
          </tr>
        </thead>
        <tbody>
          {teachersArray.map((teacher) => (
            <PayTableRow teacher={teacher} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherPayPage