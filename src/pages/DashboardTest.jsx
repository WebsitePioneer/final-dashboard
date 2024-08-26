import axios from 'axios';
import React from 'react'

const DashboardTest = () => {

    const fetchData = async () => {
              
    const response = await axios.get("/api/chart/pie",{
                headers:{
                  "Content-Type": "application/json",
                }
              })
    console.log(response)
    console.log(response.data)

    }
  return (
    <div>
        <h1>DashboardTest</h1>
        <button onClick={fetchData}>Fetch</button>
    </div>
  )
}

export default DashboardTest