import React from "react";

export const ContactPicker = ({ name, value, onChange, contacts }) => {
  return (
    <>
      <select name={name} value={value} onChange={onChange}>
        <option value={""}>No Contact Selected</option>
        {contacts.map(contact => (
          <option value={contact.name} key={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
