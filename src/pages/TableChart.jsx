import React from 'react'
import TableOneForTable from '../components/TableOneForTable'
import TableTwoForTable from '../components/TableTwoForTable'
import {useTableChartData} from "../hooks/useTableChartData"
import PieChartForTable from '../components/PieChartForTable'
import BarOneForTable from '../components/BarOneForTable'

const TableChart = () => {
  const { data, isLoading, error } = useTableChartData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      <div className="bg-white border rounded-[15px] px-3 py-3 ">
        <TableOneForTable data={data} />
      </div>

      <div className="bg-white border rounded-[15px] px-3 py-2 ">
        <PieChartForTable data={data} />
      </div>

      <div className="bg-white border rounded-[15px] px-3 py-3 ">
        <TableTwoForTable  data={data}/>
      </div>

      <div className="bg-white border rounded-[15px] px-3 py-3 ">
        <BarOneForTable data={data} />
      </div>
    </div>
  </>
  )
}

export default TableChart