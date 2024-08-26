import React from 'react'
import {useTableChartData} from "../hooks/useTableChartData"

const TableOneForTable = () => {
    const { data, isLoading, error } = useTableChartData();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const totalVotes = data.map((votes,index)=>{
        return votes.votes_count_number;
    })
    
    const sum = totalVotes.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="">
        <div className='custom-scroll h-[320px] max-sm:w-[300px] overflow-y-scroll overflow-x-hidden pr-3'>
        <table className='border-separate border w-full  '>
            <thead>
                <tr className='bg-[#1b3870] text-white'>
                <th className='p-2 text-[16px]' >ID</th>
                <th className='p-2 text-[16px]' >ID-Type</th>
                <th className='p-2 text-[16px]' >In-Review</th>
                <th className='p-2 text-[16px]' >Votes</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=> {
                    return <tr key={index}>
                        <td className={`${index % 2 === 0 ? 'bg-[#3669CF] font-[450]' : 'bg-[#608ee8]'} text-[16px] p-2`}>{value.id}</td>
                        <td className={`${index % 2 === 0 ? 'bg-[#3669CF] font-[450]' : 'bg-[#608ee8]'} text-[16px] p-2`}>{value.bucket_id}</td>
                        <td className={`${index % 2 === 0 ? 'bg-[#3669CF] font-[450]' : 'bg-[#608ee8]'} text-[16px] p-2`}>{value.status.title}</td>
                        <td className={`${index % 2 === 0 ? 'bg-[#3669CF] font-[450]' : 'bg-[#608ee8]'} text-[16px] p-2`}>{value.votes_count_number}</td>
                    </tr>
                })}

                <tr className='text-white'>
                <td className='bg-[#1b3870] text-[16px] font-[600] p-2'>Total</td>
                <td className='bg-[#1b3870] text-[16px] font-[600] p-2'>3</td>
                <td className='bg-[#1b3870] text-[16px] font-[600] p-2'>3 </td>
                <td className='bg-[#1b3870] text-[16px] font-[600] p-2'>{sum}</td>
                </tr> 
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TableOneForTable