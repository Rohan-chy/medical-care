'use client';

import { useState, useMemo } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/core';
import '@/shared/css/fullCalendar.css';
import { statusColorHexCode } from '@/shared/css/statusColors';
import AppointmentDetailsCard from './AppointmentDetailsCard';
import { formatTimeHourMinute } from '@/lib/date-time-formatter';
import { AppointmentResponseItemDto } from '../../domain/appointmentBook.dto';

interface AppointmentCalendarProps {
  appointments: AppointmentResponseItemDto[];
}

export default function AppointmentCalendar({
  appointments,
}: AppointmentCalendarProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<AppointmentResponseItemDto | null>(null);

  const events = useMemo(
    () =>
      appointments.map((a, index) => {
        const colors = statusColorHexCode[a.bookingStatus] || {
          bg: '#e5e7eb',
          border: '#d1d5db',
          text: '#374151',
        };

        return {
          id: `${a.patientId}-${a.date}-${index}`, // ✅ FIXED
          title: a.patientName,
          start: `${a.date}T${a.timeFrom}`,
          end: `${a.date}T${a.timeTo}`,
          backgroundColor: colors.bg,
          borderColor: colors.border,
          textColor: colors.text,
          extendedProps: { ...a },
        };
      }),
    [appointments]
  );

  const handleEventClick = (clickInfo: EventClickArg) => {
    const appointment = clickInfo.event
      .extendedProps as AppointmentResponseItemDto;

    if (appointment) {
      setSelectedAppointment(appointment);
      setDialogOpen(true);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        eventClick={handleEventClick}
        slotDuration="00:15:00"
        slotLabelInterval="00:15:00"
        height="auto"
        eventDisplay="block"
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        displayEventTime={false}
        dayMaxEventRows={3}
        eventContent={(eventInfo) => {
          const { patientName, timeFrom, timeTo } =
            eventInfo.event.extendedProps;

          return (
            <div style={{ fontSize: '12px', lineHeight: '1.2' }}>
              <div style={{ fontWeight: 600 }}>
                {formatTimeHourMinute(timeFrom)} -{' '}
                {formatTimeHourMinute(timeTo)}
              </div>
              <div
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {patientName}
              </div>
            </div>
          );
        }}
      />

      <AppointmentDetailsCard
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedAppointment={selectedAppointment}
      />
    </div>
  );
}
