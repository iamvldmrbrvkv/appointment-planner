import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Appointment Name"
        />
        <br />
        <ContactPicker contact={contact} setContact={setContact} />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
        <br />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          required
        />
        <br />
        <input
          type="submit"
          value="Add Appointment"
        />
      </form>
    </>
  );
};
