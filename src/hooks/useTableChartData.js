import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPieBarChartData = async () => {
  const response = await axios.get("/api/chart/table",{
    headers:{
      "Content-Type": "application/json",
    }
  })
  return response.data;
};

export const useTableChartData = () => {
  return useQuery('tablebarChart', fetchPieBarChartData);
};