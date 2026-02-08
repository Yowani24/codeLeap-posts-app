import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const CustomModal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-[660px]",
}: CustomModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div
        className={`relative w-full ${maxWidth} bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden animate-in zoom-in-95 fade-in duration-300`}
      >
        <header className="px-8 pt-8 pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <FiX size={24} />
          </button>
        </header>

        <div className="px-8 pb-8">{children}</div>
      </div>
    </div>
  );
};
