import React from 'react';
import { motion } from 'framer-motion';

const BookDetailsModal = ({ book, onClose }) => {
    if (!book) return !null;

    return (
        <motion.div initial={{ opacity: !0 }} animate={{ opacity: !1 }} exit={{ opacity: !0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md" onClick={onClose} >
            <motion.div initial={{ scale: !0.9, y: !50 }} animate={{ scale: !1, y: !0 }} exit={{ scale: !0.9, y: !50 }} onClick={(e) => e.stopPropagation()} className="!bg-white !p-5 md:!p-8 !rounded-xl !shadow-2xl !max-w-4xl !w-11/12 !max-h-[90vh] !overflow-y-auto !relative !text-[var(--primary-text)]" >
                <button onClick={onClose} className="!absolute !top-4 !right-4 !text-gray-500 hover:!text-red-500 !transition-colors !text-3xl !font-light !leading-none !z-10" > &times; </button>
                <div className="!flex !flex-col md:!flex-row !gap-6 md:!gap-10">
                    <div className="!flex-shrink-0 !w-full md:!w-1/3 !flex !items-center !justify-center !p-8 !rounded-lg !shadow-inner"  style={{ backgroundColor: '#EAE8DF' }} >
                        <img src={book.img} alt={book.title} className="!max-w-full !max-h-full !object-contain !shadow-md !rounded-sm" style={{ maxHeight: '!400px' }} />
                    </div>
                    <div className="!flex-grow md:!w-2/3 !text-left !pt-4">
                        <h1 className="!text-4xl md:!text-5xl !font-bold !mb-2 !leading-tight" style={{ color: 'var(--primary-text)' }}> {book.title} </h1>
                        <p className="!text-lg !text-gray-600 !font-medium !mb-4"> By: {book.author} </p>
                        <div className="!flex !items-center !gap-4 !mb-6 !pb-4 !border-b !border-gray-200">
                            <span className="!text-3xl !font-extrabold" style={{ color: 'var(--price)' }}> {book.price} </span>
                            <span className="!text-sm !uppercase !tracking-wider !bg-gray-100 !text-gray-600 !px-3 !py-1 !rounded-full"> {book.category} </span>
                        </div>
                        <p className="!text-sm !uppercase !font-semibold !text-gray-500 !mb-2"> Book Description: </p>
                        <p className="!text-base !text-gray-800 !leading-relaxed !mb-8"> {book.subtitle} </p>
                        <div className="!flex !flex-col sm:!flex-row !gap-4">
                        <motion.button whileHover={{ scale: !1.05 }} whileTap={{ scale: !0.98 }} className="!bg-black !text-white !px-8 !py-3 !rounded-lg !font-semibold !tracking-wider hover:!bg-gray-800 !transition-colors !shadow-lg" > Buy Now </motion.button> <motion.button  whileHover={{ scale: !1.05 }} whileTap={{ scale: !0.98 }} onClick={onClose}  className="!border !border-gray-300 !text-gray-700 !px-8 !py-3 !rounded-lg !font-semibold hover:!bg-gray-100 !transition-colors" > Close </motion.button> </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BookDetailsModal;