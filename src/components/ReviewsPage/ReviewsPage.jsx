import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { ReviewsContext } from "../../../context/ReviewContext";

const ReviewsPage = () => {
  const { userLogin } = useContext(UserContext);
  const { reviews, addReview, editReview, deleteReview } =
    useContext(ReviewsContext);

  const [editingId, setEditingId] = useState(null);

  const [newReview, setNewReview] = useState({
    name: "",
    bookName: "",
    rating: 5,
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text || !newReview.bookName) return;

    if (editingId) {
      editReview(editingId, newReview);
      setEditingId(null);
    } else {
      const review = {
        id: Date.now(),
        ...newReview,
        rating: Number(newReview.rating),
        userId: userLogin,
        date: new Date().toISOString().split("T")[0],
      };

      addReview(review);
    }

    setNewReview({
      name: "",
      bookName: "",
      rating: 5,
      text: "",
    });
  };

  const handleEdit = (review) => {
    setNewReview({
      name: review.name,
      bookName: review.bookName,
      rating: review.rating,
      text: review.text,
    });
    setEditingId(review.id);
  };

  const myReviews = reviews.filter((review) => review.userId === userLogin);

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <div className="max-w-3xl !mx-auto !px-4 !py-10 !mt-10">
      <h1 className="text-2xl font-bold text-center !mb-8 text-[var(--primary-text)]">
        Library Customer Reviews
      </h1>

      <div className="bg-white shadow-md rounded-xl !p-6 !mb-10">
        <h2 className="text-lg font-semibold !mb-4">
          {editingId ? "Edit Your Review" : "Leave a Review"}
        </h2>

        <form onSubmit={handleSubmit} className="!space-y-4">
          <div>
            <label className="block text-sm font-medium !mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full border rounded-lg !p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium !mb-1">Book Name</label>
            <input
              type="text"
              name="bookName"
              value={newReview.bookName}
              onChange={handleInputChange}
              className="w-full border rounded-lg !p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium !mb-1">Rating</label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full border rounded-lg !p-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium !mb-1">
              Your Review
            </label>
            <textarea
              name="text"
              value={newReview.text}
              onChange={handleInputChange}
              rows="4"
              className="w-full border rounded-lg !p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-[var(--cart)] text-white !px-6 !py-2 rounded-md"
          >
            {editingId ? "Update Review" : "Submit Review"}
          </button>
        </form>
      </div>

      {myReviews.length > 0 && (
        <div className="bg-gray-100 rounded-xl !p-4 !mb-8">
          <h3 className="font-semibold !mb-3">My Reviews</h3>

          {myReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow !p-3 !mb-3"
            >
              <div className="flex justify-between">
                <span className="text-yellow-500">
                  {renderStars(review.rating)}
                </span>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(review)}
                    className="text-[var(--cart)] text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="text-red-500 text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="text-sm font-medium !mt-1">
                Book: {review.bookName}
              </p>

              <p className="text-gray-600 text-sm !mt-1">{review.text}</p>
            </div>
          ))}
        </div>
      )}

      <h2 className="text-xl font-semibold !mb-6 text-[var(--primary-text)]">
        All Reviews
      </h2>

      <div className="!space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow rounded-xl !p-4">
            <div className="flex justify-between !mb-1">
              <h3 className="font-semibold">{review.name}</h3>
              <span className="text-yellow-500">
                {renderStars(review.rating)}
              </span>
            </div>

            <p className="text-sm font-medium">Book: {review.bookName}</p>

            <p className="text-gray-600 text-sm">{review.text}</p>

            <small className="text-gray-400 text-xs">
              Posted on {review.date}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
