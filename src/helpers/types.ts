export interface CrimeProps {
    data: {
      createdAt: string;
      crime: string;
      chartData: [];
      _id: string;
    };
    setCharts: React.Dispatch<React.SetStateAction<never[]>>
    charts: never[]
  }
  
 export type CrimeData = {
    id: number;
    year: number | null;
    rate: number | null;
  };
  
 export type PrintChartData = {
    labels: (number | null)[];
    datasets: {
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      pointBorderColor: string;
      pointBorderWidth: number;
      data: (number | null)[];
    }[];
  };

  
  export type ChartData = {
    labels: (number | null)[];
    datasets: {
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      pointBorderColor: string;
      pointBorderWidth: number;
      data: (number | null)[];
    }[];
  };