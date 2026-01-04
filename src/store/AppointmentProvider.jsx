import { useState } from "react";
import { AppointmentContext } from "./AppointmentContext";

export const AppointmentProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <AppointmentContext.Provider value={{ open, openForm, closeForm }}>
      {children}
    </AppointmentContext.Provider>
  );
};
