import CalendarDay from "./CalendarDay";
import styles from "../styles/CalendarPage.module.css";
import {useEffect, useState} from "react";
import {Calendars as CalendarModel} from "../models/calendars";
import * as WebsitesApi from "../network/websites_api";

interface CalendarGridProps {
  year: number;
  month: number;
  onDayClick: (date: Date) => void,
}

interface dayEventBadge {
  count: number;
  date: string;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({year, month, onDayClick}: CalendarGridProps) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = Array.from({length: daysInMonth}, (_, index) =>
    new Date(year, month, index + 1)
  );

  const [dayEventBadge, setdayEventBadge] = useState<dayEventBadge[]>([]);


  useEffect(() => {
    let arr = days.map((item, index) => {
      return formatDateToYYYYMMDD(item)
    })
    getMonthCalendars(arr);
  }, []);


  async function getMonthCalendars(dateArr: string[]) {
    try {
      const calendarResponse  = await WebsitesApi.getMonthCalendars({dateArr});
      setdayEventBadge(calendarResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  function formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() 返回值从 0 开始，需要加 1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


  return (
    <div className={`${styles.calendar_grid}`}>
      <div className={styles.weekday}>Sun</div>
      <div className={styles.weekday}>Mon</div>
      <div className={styles.weekday}>Tue</div>
      <div className={styles.weekday}>Wed</div>
      <div className={styles.weekday}>Thu</div>
      <div className={styles.weekday}>Fri</div>
      <div className={styles.weekday}>Sat</div>

      {Array.from({length: firstDayOfMonth}, (_, index) => (
        <div key={`empty-${index}`} className="empty-day"></div>
      ))}

      {days.map((date, idx) => (
        <CalendarDay
          dayEventBadge={dayEventBadge[idx]?.count || 0}
          key={date.toString()}
          date={date}
          onClick={onDayClick}/>
      ))}
    </div>
  );
};

export default CalendarGrid;
