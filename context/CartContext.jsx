import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserContext } from "../context/UserContext";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({ children }) {
  const { userLogin } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  // ✅ تحميل الكارت حسب اليوزر
  useEffect(() => {
    if (userLogin) {
      const storedCart = localStorage.getItem(`cart_${userLogin}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCart([]);
    }
  }, [userLogin]);

  // ✅ حفظ الكارت تلقائي
  useEffect(() => {
    if (userLogin) {
      localStorage.setItem(`cart_${userLogin}`, JSON.stringify(cart));
    }
  }, [cart, userLogin]);

  const normalizePrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^0-9.]/g, ""));
    }
    return Number(price);
  };

  const getFinalPrice = (product) => {
    if (product.offer && product.price2) {
      return normalizePrice(product.price2);
    }
    return normalizePrice(product.price);
  };

  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id || item.title === product.title
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id || item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(idOrTitle) {
    setCart((prev) =>
      prev.filter(
        (item) => item.title !== idOrTitle && item.id !== idOrTitle
      )
    );
  }

  function updateQty(idOrTitle, quantity) {
    if (quantity <= 0) return removeFromCart(idOrTitle);

    setCart((prev) =>
      prev.map((item) =>
        item.title === idOrTitle || item.id === idOrTitle
          ? { ...item, quantity }
          : item
      )
    );
  }

  function clearCart() {
    setCart([]);
    if (userLogin) {
      localStorage.removeItem(`cart_${userLogin}`);
    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.quantity * getFinalPrice(item),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        totalItems,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
