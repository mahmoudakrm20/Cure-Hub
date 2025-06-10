import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";

export default function PrescriptionsCard() {
  const [prescriptions, setPrescriptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("prescriptions");
    if (saved) setPrescriptions(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("prescriptions", JSON.stringify(prescriptions));
  }, [prescriptions]);

  const openModal = (index = null) => {
    setEditingIndex(index);
    if (index !== null) {
      const item = prescriptions[index];
      formik.setValues(item);
    } else {
      formik.resetForm();
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
  };

  const deletePrescription = () => {
    const updated = prescriptions.filter((_, idx) => idx !== editingIndex);
    setPrescriptions(updated);
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      patientName: "",
      date: "",
      specialty: "",
      age: "",
      gender: "",
      symptoms: "",
      diagnosis: "",
      rx: "",
      signature: "",
    },
    validationSchema: Yup.object({
      patientName: Yup.string().required("Patient name is required"),
      date: Yup.string()
        .matches(/^\d{2}\/\d{2}\/\d{4}$/, "Date must be in DD/MM/YYYY format")
        .required("Date is required"),
      specialty: Yup.string().required("Speciality is required"),
      age: Yup.number().required("Age is required").max(100,"Age must be less than or equal to 100"),
      gender: Yup.string().required("Gender is required"),
      symptoms: Yup.string().required("Symptoms are required").min(4,"at least 4 letters"),
      diagnosis: Yup.string().required("Diagnosis is required").min(4,"at least 4 letters"),
      rx: Yup.string().required("Prescription is required").min(4,"at least 4 letters"),
      signature: Yup.string().required("Doctor signature is required"),
    }),
    onSubmit: (values) => {
      const updatedList = [...prescriptions];
      if (editingIndex !== null) updatedList[editingIndex] = values;
      else updatedList.push(values);
      setPrescriptions(updatedList);
      closeModal();
    },
  });

  const renderField = (name, placeholder, className = "", type = "text") => (
    <div className={className}>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full border rounded px-2 py-1 border-cyan-600 text-sm"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={type}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-xs mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-xl min-w-80 shadow-sm p-4 ">
      <div className="flex justify-between mb-4">
        <h2 className="text-md font-semibold text-gray-800">Prescriptions</h2>
        <button onClick={() => openModal()} className="text-cyan-600 font-semibold text-sm cursor-pointer">+ Add Prescription</button>
      </div>

      <div className="h-90 overflow-y-auto pr-1">
        {prescriptions.map((item, index) => (
          <div key={index} onClick={() => openModal(index)} className="cursor-pointer text-sm border-b border-gray-300 py-2">
            <div className="grid grid-cols-3 text-gray-500 font-semibold text-xs mb-1">
              <span>Date</span>
              <span>Symptoms</span>
              <span>Specialty</span>
            </div>
            <div className="grid grid-cols-3 text-gray-800 text-sm">
              <span className="truncate">{item.date}</span>
              <span className="truncate">{item.symptoms}</span>
              <span className="truncate">{item.specialty}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-gray-400 mt-4">See All</div>

      {isModalOpen && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-6 w-[600px] shadow-xl relative">
      <div className="flex justify-center">
        <img src="/carehub_logo-DYhzqRw5.png" className="h-16" />
      </div>
      <p className="text-center text-xl font-semibold my-4">Medical Prescription Form</p>

      <form onSubmit={formik.handleSubmit} className="space-y-4 text-sm">
        {/* Row 1 */}
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold">Patients Name</label>
            {renderField("patientName", "write patient name here....")}
          </div>
          <div className="flex flex-col w-[180px]">
            <label className="text-sm font-semibold">Date</label>
            {renderField("date", "DD/MM/Y", "", "text")}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold">Speciality</label>
            {renderField("specialty", "Speciality")}
          </div>
          <div className="flex flex-col w-[80px]">
            <label className="text-sm font-semibold">Age</label>
            {renderField("age", "Age")}
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm font-semibold">Gender</label>
            {renderField("gender", "Gender")}
          </div>
        </div>

        {/* Symptoms */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Symptoms</label>
          {renderField("symptoms", "write patient Symptoms here....")}
        </div>

        {/* Diagnosis */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold">Diagnosis</label>
          {renderField("diagnosis", "writediagnosis here....")}
        </div>

        {/* RX */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold">RX</label>
          <textarea
            name="rx"
            placeholder="Prescription here......"
            className="w-full border border-cyan-500 rounded px-2 py-1 text-sm"
            rows="3"
            value={formik.values.rx}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.rx && formik.errors.rx && (
            <p className="text-red-500 text-xs mt-1">{formik.errors.rx}</p>
          )}
        </div>

        {/* Buttons and Signature */}
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            <button type="submit" className="bg-cyan-600 text-white px-4 py-1.5 rounded cursor-pointer">Save</button>
            {editingIndex !== null && (
              <button type="button" onClick={deletePrescription} className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Delete</button>
            )}
          </div>
          <div className="flex flex-col w-[250px]">
            <label className="text-sm font-semibold">Doctor Signature</label>
            <input
              name="signature"
              className="border border-cyan-600 rounded px-2 py-1"
              value={formik.values.signature}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.signature && formik.errors.signature && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.signature}</p>
            )}
          </div>
        </div>
      </form>

      <button
        onClick={closeModal}
        className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl cursor-pointer"
      >
        <X className="text-cyan-600" size={18} />
      </button>
    </div>
  </div>
)}

    </div>
  );
}
