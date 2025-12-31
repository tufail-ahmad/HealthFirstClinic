import { useContext } from "react";
import { AppointmentContext } from "./AppointmentContext";

export default function useAppointment() {
  return useContext(AppointmentContext);
}
