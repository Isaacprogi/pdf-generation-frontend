import { forwardRef} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LineChartToBase64 from '../LineChartToPrint/LineChartToPrint';
import { ChartData } from '../../helpers/types';

interface Props {
  option: string | undefined;
  chartData: ChartData; 
}

const ComponentToPrint = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div  className="min-h-full pt-[3.5rem] max-w-[595px] mx-auto" ref={ref}>
      <style type="text/css" media="print">
        {`
          @page {
            size: A4;
            margin: 5mm;
            padding-top:4rem;
          }
        `}
      </style>
      <Header />
      <div className="w-full  ">
        <LineChartToBase64 crime={props.option || undefined} chartData={props.chartData} />
      </div>
      <Footer />
    </div>
  );
});

export default ComponentToPrint;
