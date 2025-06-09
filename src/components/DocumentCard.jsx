import { useEffect, useRef, useState } from "react";
import { Download, MoreVertical, Paperclip, X } from "lucide-react";

export default function DocumentsCard() {
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("documents");
    if (stored) {
      setFiles(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(files));
  }, [files]);

  const handleFileUpload = (e) => {
    const newFiles = e.target?.files || e.dataTransfer?.files;
    if (newFiles) {
      const updatedFiles = [];
      for (let i = 0; i < newFiles.length; i++) {
        updatedFiles.push({
          name: newFiles[i].name,
          url: URL.createObjectURL(newFiles[i]),
        });
      }
      setFiles((prev) => [...prev, ...updatedFiles]);
      setShowModal(false);
      setDragActive(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFileUpload(e);
  };

  return (
    <div className="bg-white rounded-xl shadow h-80 p-4 w-full relative ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Documents</h3>
        <button
          className="text-cyan-600 text-sm font-medium  flex items-center gap-1 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <Paperclip size={16} /> Add Files
        </button>
      </div>

      {/* File List */}
      <div className="space-y-2 h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-gray-200 border-b px-3 py-2"
          >
            <a href={file.url} download={file.name} className="text-sm text-gray-700 truncate">
              {file.name}
            </a>
            <div className="flex items-center gap-3 text-gray-500">
              <a
                href={file.url}
                download={file.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} className="cursor-pointer text-cyan-600 hover:text-cyan-700" />
              </a>
              <button
                onClick={() => {
                  const updated = [...files];
                  updated.splice(index, 1);
                  setFiles(updated);
                }}
                className="cursor-pointer hover:text-red-500"
                title="Delete"
              >
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <div className="mt-4 text-center">
        <button className="text-sm text-gray-500">See All</button>
      </div>

      {/* Upload Modal */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
    <div className="bg-white rounded-lg shadow-md w-[320px] p-4 relative">
      {/* Close button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-2 right-2 text-cyan-600 cursor-pointer hover:text-red-500"
      >
        <X size={18} />
      </button>

      <h3 className="text-md font-semibold text-gray-800 mb-1">Upload File</h3>
      <p className="text-sm text-gray-500 mb-3">Attach the file below</p>

      {/* Drag and Drop Area */}
      <div
        className={`border-2 border-dashed ${
          dragActive ? "border-cyan-600 bg-cyan-50" : "border-cyan-600"
        } p-6 rounded-lg text-center`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
          <Paperclip size={32} className="text-cyan-500 mb-2" />
          <p className="text-sm text-gray-700 font-medium">Drag file(s) here to upload</p>
          <p className="text-xs text-gray-400 mt-1">
            Alternatively you can select the file by{" "}
            <span
              onClick={() => fileInputRef.current?.click()}
              className="text-cyan-600 cursor-pointer"
            >
              Clicking here
            </span>
          </p>
        </label>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          id="file-upload"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-1 rounded border text-gray-600 border-cyan-600 hover:bg-gray-100 text-sm cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-1 rounded bg-cyan-600 text-white hover:bg-cyan-700 text-sm cursor-pointer"
        >
          Upload File
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
