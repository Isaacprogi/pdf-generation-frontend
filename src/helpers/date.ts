export const formatDate = (date: { date: string }): string => {
  const inputDate = new Date(date.date);
  const options: Intl.DateTimeFormatOptions = {timeZone: 'UTC' , year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate: string = inputDate.toLocaleDateString('en-US', options);
  return formattedDate;
};


export const printDate = () => {
  const today = new Date();
  const monthNames: string[] = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const formattedDate: string = `Report Generated on ${monthNames[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
  return formattedDate
}