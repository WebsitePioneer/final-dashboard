import React from 'react'

const TableTwoForTable = ({data}) => {

    // Total Number of Upvotes
    const totalVotes = data.map((votes,index)=>{
        return votes.votes_count_number;
    })
    const sum = totalVotes.reduce((acc, curr) => acc + curr, 0);
    // ----------------****----------

    // Total Feedbacks
    const totalFeedbacks =  totalVotes.length;
    // ----------------****----------

    // Sorted upvotes Array with removing duplicates
    const votesFilter = totalVotes.filter((item, index) => totalVotes.indexOf(item) === index);
    // ----------------****----------

    // Sorted aupvotes array with highest three votes
    const sortedArray = [...votesFilter].sort((a, b) => b - a).slice(0, 3);
    const hightVotes = sortedArray;
    // ----------------****----------

    // Votes and titles
    const votesData = data.map(titles=>{
            return [titles.title, titles.votes_count_number]
    })

    // titel and vote with highest three votes
    const hightvotetitlesandvotes = votesData.map((arr, index) => {
        return hightVotes.map(votes =>{
            if(arr[1] === votes)  return [arr[0],arr[1]];
        })
    })

    // titel and vote with highest three votes with removing the duplicates
    const cleanedVoteTitles = hightvotetitlesandvotes.map(innerArray => innerArray.filter(item => item !== undefined)).filter(innerArray => innerArray.length > 0);

    const sortedvoteTitle = [...cleanedVoteTitles].reverse();

    // Bucket ID types
    const bucketID = data.map((bucket,index)=> {
        return bucket.bucket_id;
    })
    const bucketIDfilter = bucketID.filter((item, index) => bucketID.indexOf(item) === index);
    const bucketIDTypes = bucketIDfilter.length;
    // ----------------****----------

    // Time Intervel in Dates
    const dates = data.map((date,index) => {
        return date.updated_at.humanized_date
    })
    const datesFilter = dates.filter((item, index) => dates.indexOf(item) === index);
    const totalDates = datesFilter.length;
    // ----------------****----------


  return (
    <div className="">
        <div className='custom-scroll h-[320px] max-sm:w-[300px] overflow-y-scroll pr-3'>
        <table className='border-separate border w-full '>
            <tbody className=''>
                <tr className='w-full bg-[#db3750] text-white'>
                    <td colSpan={2} className='text-[16px] font-[500] py-2 px-4'>Total Feedbacks</td>
                    <td className='text-[16px] font-[500]  px-4'>{totalFeedbacks}</td>
                </tr> 

                <tr className='bg-[#af273b] text-white'>
                    <td colSpan={2} className='text-[16px] font-[500] py-2 px-4'>Time Interval (Days)</td>
                    <td className='text-[16px] font-[500] px-4'>{totalDates}</td>
                </tr>  

                <tr className='bg-[#db3750] text-white'>
                <td colSpan={2} className='text-[16px] font-[500] py-2 px-4'>Bucket ID Types</td>
                <td className='text-[16px] font-[500] px-4'>{bucketIDTypes}</td>
                </tr>  

                <tr className='bg-[#af273b] text-white'>
                    <td colSpan={2} className='text-[16px] font-[500] py-2 px-4'>Total Up-Votes</td>
                    <td className=' text-[16px] font-[500] px-4'>{sum}</td>
                </tr>  

                <tr>
                    <td colSpan={3} className='bg-[#db3750] text-white text-center text-[18px] font-[600] p-2 px-4 '>Feedbacks with High Votes</td>
                </tr> 

                {sortedvoteTitle.map((title,ind) => {
                    return <tr key={ind}>
                    <td colSpan={2} className='bg-[#af273b] text-white text-[16px] font-[500] py-[5px] px-4'>{title[0][0]}</td>
                    <td className='bg-[#af273b] text-white text-[16px] font-[500] px-4'>{title[0][1]}</td>
                </tr>
                })}
                

            </tbody>
        </table>
        </div>
    </div>
  )
}

export default TableTwoForTable