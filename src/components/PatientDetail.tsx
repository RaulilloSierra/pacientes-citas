import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <h2 className="font-bold text-2xl mb-4">{patient.name}</h2>
      <PatientDetailItem label="Id" data={patient.id} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha de ingreso" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />
    </div>
  );
}
