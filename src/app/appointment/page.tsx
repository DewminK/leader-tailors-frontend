"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentForm from "./components/AppointmentForm";

export default function Appointment() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12 px-4">
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
