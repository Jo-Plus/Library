import React, { createContext, useContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const ReviewsContext = createContext();

export function useReviews() {
  return useContext(ReviewsContext);
}

const defaultReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    rating: 5,
    text: "Amazing library! Great selection of books and friendly staff.",
    date: "2023-10-01",
    userId: "guest1",
  },
  {
    id: 2,
    name: "Bob Smith",
    rating: 4,
    text: "Good place to study, but could use more quiet zones.",
    date: "2023-09-28",
    userId: "guest2",
  },
  {
    id: 3,
    name: "Charlie Brown",
    rating: 3,
    text: "Decent, but the online catalog is a bit outdated.",
    date: "2023-09-25",
    userId: "guest3",
  },
  {
    id: 4,
    name: "john mart",
    rating: 5,
    text: "Decent, but the online catalog is a bit outdated.",
    date: "2022-04-25",
    userId: "guest4",
  },
];

export default function ReviewsProvider({ children }) {
  const { userLogin } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);

  // ✅ تحميل الريفيوهات حسب اليوزر (نفس الكارت)
  useEffect(() => {
    if (userLogin) {
      const stored = localStorage.getItem(`reviews_${userLogin}`);
      const userReviews = stored ? JSON.parse(stored) : [];
      setReviews([...userReviews, ...defaultReviews]);
    } else {
      setReviews(defaultReviews);
    }
  }, [userLogin]);

  // ✅ حفظ ريفيوهات اليوزر فقط
  useEffect(() => {
    if (userLogin) {
      const userOnly = reviews.filter(
        (review) => review.userId === userLogin
      );

      localStorage.setItem(
        `reviews_${userLogin}`,
        JSON.stringify(userOnly)
      );
    }
  }, [reviews, userLogin]);

  function addReview(review) {
    setReviews((prev) => [review, ...prev]);
  }

  function editReview(id, updatedReview) {
    setReviews((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ...updatedReview } : item
      )
    );
  }

  function deleteReview(id) {
    setReviews((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        addReview,
        editReview,
        deleteReview,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
}
