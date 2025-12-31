import { createContext } from "react";

export const AppointmentContext = createContext({
  open: true,
  openForm: () => {},
  closeForm: () => {},
});
