import React from "react";

export const ContactPicker = ({ name, value, onChange, contacts }) => {
  return (
    <>
      <select name={name} value={value} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact, i) => (
          <option key={i}>{contact.name}</option>
        ))}
      </select>
    </>
  );
};
