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
      <PatientDetailItem
        label="Fecha de ingreso"
        data={patient.date.toString()}
      />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />
      <div className="flex justify-between gap-3 mt-10">
        <button
          type="button"
          className="py-2 px-4 bg-teal-600 hover:bg-teal-400 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-pink-600 hover:bg-pink-400 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
