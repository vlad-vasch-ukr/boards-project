import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calendar.scss';

export function Calendar() {
  return (
    <DayPicker
      mode="single"
      className="day-picker"
    />
  );
}