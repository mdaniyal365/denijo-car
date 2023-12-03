import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Calendar_item() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <form>
      <div>
        <label>
          Date:
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </label>
      </div>
    </form>
  );
}

export default Calendar_item;
