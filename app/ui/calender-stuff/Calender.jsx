"use client"
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { Paper, Stack } from '@mui/material'
import { formatDate } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './calender.css'
import Header from "./Header.jsx";
function renderEventContent(eventInfo) {
  return (
    <>
      <Header />
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </b>
      <i>{event.title}</i>
    </li>
  )
}
export default function Calender() {
  const [weekendsVisible, setweekendsVisible] = useState(true)
  const [currentEvents, setcurrentEvents] = useState([])

  // eslint-disable-next-line no-unused-vars
  const handleWeekendsToggle = () => {
    setweekendsVisible(!weekendsVisible)
  }

  let eventGuid = 0
  function createEventId() {
    return String(eventGuid++)
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
    }
  }

  const handleEvents = (events) => {
    setcurrentEvents(events)
  }

  return (
    <Stack direction={'row'} className="bg-gray-900 text-white min-h-screen">
      <Paper className='demo-app-sidebar bg-gray-800 text-white p-4 rounded'>
        <h2 className="text-center text-xl">
          All Events ({currentEvents.length})
        </h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div className='demo-app-main bg-gray-900 p-4 rounded flex-grow'>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView='dayGridMonth'
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents}
        />
      </div>
    </Stack>

  )
}
