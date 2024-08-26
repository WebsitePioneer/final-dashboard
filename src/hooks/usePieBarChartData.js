import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPieBarChartData = async () => {
  const response = await axios.get("/api/chart/pie",{
    headers:{
      "Content-Type": "application/json",
    }
  })
  return response.data;
};

export const usePieBarChartData = () => {
  return useQuery('piebarChart', fetchPieBarChartData);
};
