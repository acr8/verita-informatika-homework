import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchOneContent } from "../store/actionCreators";

export default function Card({content, index}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function toContentDetail(id) {
    dispatch(fetchOneContent(id))
    .then(() => {
      navigate(`contentDetail/${id}`)
    })
  }
  return (
    <div className="w-1/2 flex justify-center py-6"
    onClick={() => toContentDetail(content.id)}>
      <img
        className="cardImages rounded-xl hover:scale-105 duration-500 shadow-lg cursor-pointer"
        src={content.image}
        alt="new"
      />
    </div>
  );
}
