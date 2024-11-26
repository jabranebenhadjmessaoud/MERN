import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime.js' ;
dayjs.extend(relativeTime);

const dateformated= (date) => dayjs(date).format('MMMM D,YYYY,HH:MM: ss A ') ;
const daybefore= (date) => dayjs(date).format('dddd,MMMM DD, YYYY ') ;
const numbersdate= (date) => dayjs(date).format('MM/DD/YYYY') ;
const ago=(date) => dayjs(date).fromNow() ;

export {dateformated,daybefore,numbersdate,ago}