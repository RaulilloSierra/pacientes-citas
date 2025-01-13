export type Patient = {
  id: String;
  name: String;
  caretaker: String;
  email: String;
  date: Date;
  symptoms: String;
};

export type DraftPatient = Omit<Patient, "id">;
