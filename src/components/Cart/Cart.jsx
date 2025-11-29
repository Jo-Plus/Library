import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalItems } =
    useContext(CartContext);

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cash");
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => {
    const priceNum =
    typeof item.price === "string" ? parseFloat(item.price.replace(/[^0-9.]/g, "")) : Number(item.price);
    return total + priceNum * item.quantity;
  }, 0);

  const handleConfirm = () => {
    if (!address.trim()) {
      toast.error("Please enter your delivery address");
      return;}
    toast.success("Order placed successfully!");
  };

  return (
    <div className="!min-h-[calc(100vh-440px)] bg-[var(--primary-bg)] !py-12 !px-3 sm:!px-6 !mt-10 !text-[var(--primary-text)]">
      <div className="!max-w-4xl !mx-auto bg-[var(--second-bg)]  rounded-3xl !py-6 sm:!py-8 shadow-lg overflow-hidden border border-[var(--border-book)]">
        <div className="bg-[var(--gradient)] !p-6 sm:!p-8 text-center !text-[var(--primary-text)]">
          <h1 className="text-2xl sm:text-4xl font-bold !mb-2">Your Cart</h1>
          <p className="opacity-90 text-sm sm:text-lg">
            {totalItems === 0 ? "Your cart is waiting to be filled" : `${totalItems} item${totalItems > 1 ? "s" : ""} in your cart`}
          </p>
        </div>

        <div className="!p-4 sm:!p-8">
          {cart.length === 0 ? (
            <div className="text-center !py-12">
              <div className="text-7xl !mb-6 opacity-20">🛒</div>
              <p className="!text-[var(--primary-text)] text-lg !mb-6"> Your cart is empty </p>
              <button className="bg-[var(--primary-bg)] text-[var(--primary-text)] !px-8 !py-3 rounded-xl font-semibold shadow" onClick={() => navigate("/")} > Start Shopping </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center !gap-4 sm:!gap-6 !p-4 sm:!p-6 bg-[var(--primary-bg)] rounded-2xl border border-[var(--border-book)] hover:shadow-md transition-all !mb-6" >
                    <div className="relative flex-shrink-0 self-center sm:self-auto">
                      <img src={item.img} className="w-20 h-20 rounded-xl object-cover border border-[var(--border-book)] shadow-md" alt={item.title} />
                      <div className="absolute -top-2 -right-2 bg-[var(--gradient)] text-[var(--primary-text)] text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg"> {item.quantity} </div>
                    </div>

                    <div className="flex-1 min-w-0 text-center sm:text-left">
                      <h2 className="text-base sm:text-xl font-bold !mb-1 break-words"> {item.title} </h2>
                      <p className="text-[var(--third-text)] text-xs sm:text-sm !mb-3"> By {item.author} </p>

                      <div className="flex flex-wrap justify-center sm:justify-start items-center !gap-2 sm:!gap-4 text-sm sm:text-base">
                        <p className="font-bold text-[var(--price)]"> $ {typeof item.price === "string" ? parseFloat(item.price.replace(/[^0-9.]/g, "")) : item.price} </p>
                        <span className="text-[var(--third-text)]">•</span>
                        <p className="text-[var(--second-text)]"> Qty: {item.quantity} </p> </div> </div>

                    <div className="text-left sm:text-right flex-shrink-0 !mt-2 sm:!mt-0">
                      <p className="text-lg sm:text-xl font-bold"> $ {(typeof item.price === "string" ? parseFloat(item.price.replace(/[^0-9.]/g, "")) : item.price) * item.quantity} </p>
                       <p className="text-[var(--third-text)] text-sm"> Subtotal </p>
                    </div>

                    <button onClick={() => { removeFromCart(item.id); toast("Item removed", { icon: "🗑️" }); }}
                       className="self-center sm:self-auto text-gray-400 hover:text-red-500 transition !p-2 rounded-full hover:bg-red-50" > ✖ </button> </div> ))}
              </div>

              <div className="bg-[var(--primary-bg)] rounded-2xl !p-5 sm:!p-6 border border-[var(--border-book)]">
                <h3 className="text-xl sm:text-2xl font-bold !mb-6 text-center"> Order Summary </h3>
                <div className="space-y-4 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold"> ${totalPrice.toFixed(2)} </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">$5.00</span>
                  </div>
                  <div className="border-t !pt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-[var(--price)]"> ${(totalPrice + 5).toFixed(2)} </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold !mb-2">Delivery Address</h3>
                <input type="text" placeholder="Enter your full delivery address..." className="w-full !p-4 rounded-xl border border-[var(--border-book)] bg-white outline-none text-sm sm:text-lg text-black" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <div>
                <h3 className="text-lg font-bold !mb-4">Payment Method</h3>
                <div className="grid !gap-4">
                  {["cash", "visa"].map((method) => (
                    <label key={method}
                      className={`flex items-center !p-4 rounded-xl border-2 cursor-pointer transition ${ payment === method ? "border-[var(--hover)] bg-[var(--bg-book)]" : "border-[var(--border-book)]" }`} >
                      <input type="radio" name="payment" value={method} checked={payment === method} onChange={() => setPayment(method)} className="mr-3" />
                      <span className="font-semibold capitalize"> {method === "cash" ? "Cash on Delivery" : "Visa / Credit Card"} </span>
                    </label>
                  ))}
                </div>
                 </div>
              <div className="!pt-4 space-y-4">
                <button onClick={handleConfirm} className="bg-white w-full sm:w-[50%] text-gray-500 !py-4 rounded-2xl font-bold shadow !mx-auto block !mb-4" > Confirm Order - ${(totalPrice + 5).toFixed(2)} </button>
                <div className="flex flex-col sm:flex-row !gap-4">
                   <button onClick={() => { clearCart(); toast("Cart cleared", { icon: "🧹" }); }} className="flex-1 text-black bg-white !py-3 rounded-xl border" > Clear Cart </button>
                  <button className="flex-1 bg-black text-white !py-3 rounded-xl" onClick={() => navigate("/")} > Continue Shopping </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
