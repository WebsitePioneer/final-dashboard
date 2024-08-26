import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPieBarChartData = async () => {
  const response = await axios.get("https://mock-react-dashboard-api.alphaos.workers.dev/chart/pie",{
    headers:{
      "Content-Type": "application/json",
    }
  })
  return response.data;
};

export const usePieBarChartData = () => {
  return useQuery('piebarChart', fetchPieBarChartData);
};
