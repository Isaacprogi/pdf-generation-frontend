import { useState, useRef } from 'react';
import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrintHistory from '../ComponentToPrintHistory/ComponentToPrintHistory';
import { ChartData,CrimeData } from '../../helpers/types';


interface CrimeProps {
  data: {
    createdAt: string;
    crime: string;
    chartData: [];
    _id: string;
  };
  setCharts: React.Dispatch<React.SetStateAction<never[]>>
  charts: never[]
}


const Crime: React.FC<CrimeProps> = ({ charts, setCharts, data }) => {
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
  const [viewLoading, setViewLoading] = useState<boolean>(false)
  const utcTimestamp = data.createdAt; 
 const userLocalTime = new Date(utcTimestamp).toLocaleString();


  const handleDelete = async (id: string) => {
    
    try {
      setDeleteLoading(true)
      await axios.delete(`https://report-generator-api-real-assist.onrender.com/api/chart/${id}`)
      setCharts(charts.filter((chart: CrimeProps['data']) => chart?._id !== id))
      setDeleteLoading(false)
    } catch (error) {
      setDeleteLoading(false)
    }
  };

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setViewLoading(true);
    },
    onAfterPrint: () => {
      setViewLoading(false);
    },
  });



  const chartData: ChartData = {
    labels: data?.chartData ? data?.chartData.map((data:CrimeData) => data.year) : [],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: '#1463FF',
        borderWidth: 2,
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        data: data?.chartData ? data?.chartData.map((data:CrimeData) => data.rate) : [],
      },
    ],
  };


  return (
    <div className='w-full'>
      <div style={{ overflow: 'hidden', height: 0 }}>
        {
          data?.chartData?.length > 0 &&
          <div style={{ overflow: 'hidden', height: 0 }}>
           <ComponentToPrintHistory ref={componentRef} date={data.createdAt} option={data.crime} chartData={chartData} />
           </div>
        }
      </div>
      <div className='flex flex-col sm:flex-row w-full  gap-[.3rem]  rounded-md '>

        <div className='flex w-full flex-col justify-center p-[.3rem] flex-1 h-[3rem] rounded-sm bg-blue-50'>
          <span className='text-blue-900 font-[700]'>{data?.crime}</span>
          <span className='text-gray-700 text-[.7rem] font-[400]'>
            {userLocalTime}
          </span>
        </div>

        <div className="flex items-center  gap-[.5rem] justify-start ">
          <button
            onClick={handlePrint}
            disabled={viewLoading}
            className='rounded-sm w-[4rem] flex items-center justify-center font-[700] text-white bg-blue-800 hover:bg-blue-700 duration-300 cursor-pointer h-[2rem] px-[.8rem]'>
               {viewLoading ? (
              <ClipLoader size={15} color={"white"} /> 
            ) : (
              'View'
            )}
          </button>

          <button
            disabled={deleteLoading}
            onClick={() => handleDelete(data?._id)}
            className='rounded-sm w-[4rem] font-[700] flex items-center justify-center text-white bg-red-600 hover:bg-red-400 duration-300 cursor-pointer h-[2rem] px-[.8rem]'>
            {deleteLoading ? (
              <ClipLoader size={15} color={"white"} /> 
            ) : (
              'Delete'
            )}
          </button>
        </div>


      </div>
    </div>
  );
};

export default Crime;
