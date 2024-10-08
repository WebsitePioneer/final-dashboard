import { useQuery } from 'react-query';
import axios from 'axios';

const fetchLineChartData = async () => {
  const response = await axios.get("https://mock-react-dashboard-api.alphaos.workers.dev/chart/line", {
    headers: {
      "Content-Type": "application/json",
    }
  })
  return response.data;
};

export const useLineChartData = () => {
  return useQuery('lineChart', fetchLineChartData);
};
