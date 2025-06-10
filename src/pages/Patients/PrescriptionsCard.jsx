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
        <div className="flex flex-col items-center gap-2 mt-2 px-8 py-4">
        <svg width="60" height="60" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6698 43.221C22.8802 42.8054 20.2686 40.9982 17.7906 39.1522C14.8826 36.9866 12.7522 35.1554 10.1502 32.5854C8.31782 30.7758 7.12942 29.4806 6.07902 28.1486C5.86702 27.8806 5.66182 27.6226 5.62382 27.5786C5.56382 27.5066 5.58382 27.4826 5.82382 27.3466C6.39502 27.0226 6.50622 26.765 7.72182 22.9274C8.81062 19.4902 8.70662 19.7918 8.75382 19.937C8.79382 20.005 8.98182 20.9418 9.21462 22.0202C9.88302 25.1386 9.96622 25.4222 10.3146 25.7718C10.5546 26.0118 10.9342 26.1862 11.341 26.2402C11.645 26.2802 12.1694 26.1322 12.4582 25.9202C12.7782 25.6882 13.2294 24.9938 14.6014 22.619C14.8934 22.1138 15.1462 21.7002 15.163 21.7002C15.163 21.7002 15.435 22.1578 15.7294 22.717C16.8394 24.823 18.0778 27.1302 18.2978 27.503C18.6698 28.1354 19.1178 28.3934 19.825 28.3862C20.3666 28.3822 20.8158 28.1622 21.1038 27.765C21.2878 27.509 21.675 26.3054 22.7166 22.7294C23.7054 19.335 24.055 18.2078 24.0958 18.281C24.1438 18.369 24.6062 20.5626 25.3882 24.4206C26.1054 27.9598 26.6402 30.5238 26.8182 31.2758C26.9262 31.7354 26.9702 31.8422 27.1502 32.0602C27.2822 32.2242 27.4582 32.3642 27.6438 32.4602C27.9078 32.5962 27.9718 32.6082 28.4254 32.6082C28.853 32.6078 28.955 32.6082 29.1918 32.4802C29.6342 32.2722 29.763 32.1002 30.1554 31.1786C30.4274 30.5426 31.3014 28.3626 31.7946 27.0942C31.8386 26.9822 31.9106 27.0942 32.539 28.3442C33.297 29.8382 33.5954 30.3714 33.7618 30.5318C33.8218 30.5878 34.0098 30.7038 34.1802 30.7838C34.765 31.0598 35.5618 30.9518 36.0046 30.5278C36.2246 30.3198 36.845 29.0806 38.3274 25.9002C38.803 24.8802 39.359 23.7118 39.5634 23.3038L39.9354 22.5618L40.0234 22.7338C40.0714 22.8258 40.443 23.7134 40.8494 24.703C41.731 26.8506 41.8318 27.0582 42.1218 27.3258L42.3458 27.5338L42.2258 27.7018C41.9898 28.0338 40.901 29.343 40.2626 30.0622C39.4438 30.9858 37.127 33.305 36.0258 34.3046C33.9582 36.1802 31.8122 37.9486 29.6798 39.5334C27.6854 41.0158 24.4714 43.1802 24.0314 43.337C23.9834 43.337 23.8298 43.297 23.6698 43.221ZM34.2578 24.3426C33.4802 22.7886 33.0262 21.9506 32.871 21.7838C32.711 21.6078 32.2822 21.3918 31.9466 21.3126C31.5506 21.2206 31.0354 21.3646 30.5718 21.7006C30.3318 21.8766 30.1498 22.2286 29.5542 23.689C29.1058 24.7878 28.997 25.0142 28.9446 24.957C28.8966 24.905 28.8926 24.873 27.5154 18.0518C26.3862 12.455 26.0686 10.9514 25.8974 10.3962C25.7774 10.0082 25.5614 9.77456 25.1222 9.55816C24.8822 9.44216 24.7942 9.42216 24.3838 9.42616C23.973 9.42736 23.8838 9.42616 23.6294 9.56616C23.0782 9.83416 23.0342 9.90615 22.609 11.2618C22.1146 12.8366 21.9926 13.2462 20.6638 17.781C20.0438 19.8974 19.4894 21.7806 19.4318 21.9658L19.3278 22.3018L19.2158 22.1378C19.0758 21.9258 18.8878 21.5806 17.9002 19.7178C16.717 17.4834 16.4458 17.073 15.9894 16.8242C15.7574 16.6962 15.6894 16.6842 15.2654 16.6842C14.717 16.6862 14.5382 16.7482 14.2082 17.0522C13.9122 17.3242 13.6666 17.6738 13.1066 18.613C12.521 19.5946 12.2742 19.9562 12.225 19.9046C12.185 19.8646 11.949 18.749 11.6638 17.3878C11.0778 14.6098 10.6938 12.8722 10.583 12.4982C10.491 12.1902 10.203 11.9194 9.72942 11.689C9.46142 11.561 9.34942 11.533 9.06422 11.533C8.76822 11.5314 8.66822 11.573 8.35342 11.709C7.73462 12.009 7.74262 11.993 7.18422 13.6774C6.25582 16.4758 4.53062 21.845 3.98342 23.639C3.86742 24.015 3.76742 24.3338 3.76342 24.3438C3.76342 24.3438 3.69142 24.3838 3.61542 24.3838C3.35942 24.3838 3.05862 23.9298 2.25302 22.337C1.09582 20.0494 0.306218 17.681 0.0638176 15.7686C-0.0201824 15.1098 -0.0201825 12.5442 0.0630175 11.8958C0.343017 9.71856 1.38542 7.32976 2.85462 5.49896C5.04102 2.77456 8.43022 0.983356 11.9502 0.692156C13.3266 0.576156 15.411 0.816155 16.8702 1.25456C18.2762 1.67696 19.9054 2.56376 21.2466 3.63736C21.9402 4.19256 22.8534 5.11736 23.3258 5.74416C23.7426 6.29736 23.9402 6.52815 23.9966 6.52815C23.9966 6.52815 24.1606 6.35616 24.3166 6.14816C26.309 3.49776 28.7806 1.83376 31.9074 1.03816C33.0074 0.758155 33.379 0.722155 35.0202 0.722155C36.6006 0.722555 36.8206 0.762155 37.947 1.01816C41.8346 1.96416 44.9298 4.43376 46.6658 7.97496C47.1122 8.88576 47.3986 9.66456 47.6218 10.5734C48.4602 13.9866 47.8978 17.8158 45.9762 21.8094C45.5842 22.6202 44.9866 23.7082 44.635 24.2454L44.411 24.5854L44.319 24.3694C44.267 24.2494 43.789 23.0946 43.2546 21.8002C42.2478 19.3642 41.6582 17.9906 41.395 17.4694C41.123 16.9286 40.6426 16.6974 39.8762 16.7374C39.4014 16.7774 39.1074 16.8734 38.8446 17.1294C38.6086 17.3614 38.1302 18.349 35.8182 23.3914C35.293 24.537 34.855 25.4826 34.8454 25.4922C34.8454 25.4922 34.5694 24.9946 34.2554 24.3646L34.2578 24.3426Z" fill="#00A8B5"/>
          </svg>
        <div className="text-4xl font-bold">
     <span className="text-cyan-600">Cure</span>
      <span className="text-black">Hub</span>
     </div>
      </div>      
      </div>
      <p className="text-center text-2xl font-semibold mb-6 mt-2">Medical Prescription Form</p>

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
            className="w-full min-h-40 border border-cyan-500 rounded px-2 py-1 text-sm"
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
