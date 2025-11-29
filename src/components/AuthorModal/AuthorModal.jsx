import React from "react";
import { X } from "lucide-react";

export default function AuthorModal({ author, onClose }) {
  if (!author) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 !px-4 ">
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative shadow-xl animate-fadeIn">
        <button onClick={onClose} className="absolute !top-3 !right-3 bg-gray-100 hover:bg-gray-200 rounded-full !p-2 text-black" > <X size={20} /> </button>

        <div className="!w-full !h-56 bg-gray-100 flex items-center justify-center !py-2">
          <img src={author.img} alt={author.title} className="!h-full object-contain" />
        </div>

        <div className="!p-6 !space-y-4">
          <h2 className="text-2xl font-bold text-gray-800"> {author.title} </h2>
          <p className="text-gray-600"> <span className="font-semibold">Author:</span> {author.author} </p>
          <p className="text-gray-600"> <span className="font-semibold">Category:</span> {author.category} </p>
          <p className="text-gray-600"> <span className="font-semibold">Hits:</span> {author.hits} </p>
          <div className="flex items-center !gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className={`text-lg ${i <= author.rating ? "text-yellow-500" : "text-gray-300"}`} > ★ </span> ))}
          </div>
          <button onClick={onClose} className="w-full bg-[var(--cart)] text-white !py-3 rounded-xl !mt-4    " > Close </button>
        </div>
      </div>
    </div>
  );
}
