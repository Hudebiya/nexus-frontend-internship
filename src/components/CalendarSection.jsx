import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarSection = () => {
  const [events, setEvents] = useState([
    { title: 'Investor Meet', start: new Date().toISOString() }
  ]);

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your meeting');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        }
      ]);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md animate-fade-in">
      <h2 className="text-2xl font-bold text-primary-800 mb-4">Meeting Schedule</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        initialEvents={events} 
        select={handleDateSelect}
        height="70vh"
      />
    </div>
  );
};

export default CalendarSection;