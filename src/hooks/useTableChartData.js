import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPieBarChartData = async () => {
  const response = await axios.get("https://mock-react-dashboard-api.alphaos.workers.dev/chart/table", {
    headers: {
      "Content-Type": "application/json",
    }
  })
  return response.data;
};

export const useTableChartData = () => {
  return useQuery('tablebarChart', fetchPieBarChartData);
};