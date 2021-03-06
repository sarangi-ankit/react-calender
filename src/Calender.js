import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel
} from "@devexpress/dx-react-scheduler-material-ui";
const recurrenceAppointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 100,
    location:"Room 2",
    
    // exDate: "20180628T063500Z,20180626T061500Z"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 101,
    location:"Room 2",
    // exDate: "20180627T091100Z",
    
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 102,
    location:"Room 2",
    allDay: true
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 27, 11, 45),
    endDate: new Date(2018, 5, 27, 13, 20),
    id: 4,
    location: "Room 2"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
    location: "Room 1"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
    location: "Room 3"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2"
  }
];
const appointmentComponent = (props) => {
  console.log(props.data)
  if (props.data) {
    return <Appointments.Appointment {...props} />;
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{ ...props.style, cursor: "not-allowed" }}
    />
  );
};
const Demo = () => {
  const [data, setData] = React.useState(recurrenceAppointments);
  const [currentDate, setCurrentDate] = React.useState(new Date("2018-06-27"));
  
  const commitChanges = ({ added, changed, deleted }) => {
    setData((data) => {
      let newdata = [];
     
      if (changed) {
        newdata = data.map((appointment) =>(
          
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment)
        );
        
      }
      
     
      return newdata;
    });
  };
  return (
    <Paper>
      <Scheduler data={data} height={660}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <EditRecurrenceMenu />
        <WeekView startDayHour={9} endDayHour={16} />
        <Appointments appointmentComponent={appointmentComponent} />
        <AllDayPanel />
        <DragDropProvider
        // allowDrag={allowDrag}
        />
      </Scheduler>
    </Paper>
  );
};
export default Demo;