import styles from "../styles/CalendarPage.module.css";

interface CalendarDayProps {
    date: Date,
    dayEventBadge: number,
    onClick: (date: Date) => void;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date,dayEventBadge, onClick }) => {
    const handleDayClick = () => {
        onClick(date);
    }

    return (
        <div className={styles.calendar_day} onClick={handleDayClick}>
            {date.getDate()}
            &nbsp;
            {dayEventBadge > 0 && <span className="badge text-bg-danger">{dayEventBadge}</span> }
        </div>
    );
};

export default CalendarDay;
