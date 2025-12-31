import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";
import "./App.css";
import Main from "../components/Main";
import useAppointment from "../store/useAppointment";

function App() {
  const { open, closeForm } = useAppointment();
  console.log(open);

  return (
    <>
      <Header />
      <Main />
      {open && <AppointmentForm onClose={closeForm} />}
      <Footer />
    </>
  );
}

export default App;
