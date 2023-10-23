import React from 'react';
import { printDate } from '../../helpers/date';
import { formatDate } from '../../helpers/date';

const Footer = ({history,date}:{date?:string,history?:Boolean}) => {
   const historyDate:string = history && date? `Report Generated on ${formatDate({ date: date })} ` : ''
  return (
    <div className="footer">
      <div className="h-line w-full h-[2px] bg-gradient-to-r from-[#005DFF] to-[#21DDFF] mb-2"></div>
      <div className="pb-4 text-[9px] font-[900] flex items-center justify-between left-0 w-full ">
        <span className="text-[#1463FF]">{history?historyDate:printDate()}</span>
        <span className="text-[#090E24]">
          RealAssist Property Report | <span className='text-[#626E99]'>
          <span className='page-number'></span> of 25
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
