



const Dashboard = () => {
  
  const dateString = "2024-03-01T05:00:00.000Z"


  const date = new Date(dateString)

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const formattedDate = date.toLocaleString('en-US', options);

  console.log(date, formattedDate)




  return (
    <div>Dashboard</div>
  )
}

export default Dashboard