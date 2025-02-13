import React, { useState, useEffect } from "react";
import { getUserPrevious } from "../axiosRequests/usersRequests";
import { addRatingAxios } from "../axiosRequests/ratingsRequests";
import Rating from "../components/Rating";
import SuccessToast from "../hooks/toastNotifications/SuccessToast";
import WarningToast from "../hooks/toastNotifications/WarningToast";
import "../styles/Cart.css";

const PreviousContainer = () => {
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(1);

  const changeHandler = (e) => {
    const { value } = e.target;
    setRating(+value);
  };

  const submitHandler = (e, userId, bookId) => {
    e.preventDefault();
    addRatingAxios(rating, userId, bookId)
      .then((rating) =>
        SuccessToast("✨ 📚 Thank you for rating this book!✨ 📚")
      )
      .catch((err) => WarningToast("🦥You already rated this book!🦥 "));
  };

  useEffect(() => {
    getUserPrevious().then((res) => setCart(res.data));
  }, []);

  return (
    <div className="cart">
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Rating</th>
        </tr>
        {cart &&
          cart.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.book.title}</td>
                <td>{data.book.author}</td>
                <td>{data.quantity}</td>
                <td>{data.book.price}</td>
                <td>
                  <Rating
                    submitHandler={submitHandler}
                    changeHandler={changeHandler}
                    data={data}
                  />
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default PreviousContainer;
