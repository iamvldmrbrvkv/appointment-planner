import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
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
          placeholder="Contact Name"
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
          required
          placeholder="Contact Phone (#-###-###-##-##)"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Contact Email"
        />
        <br />
        <input
          type="submit"
          value="Add Contact"
        />
      </form>
    </>
  );
};

