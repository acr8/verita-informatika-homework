import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContents } from "../store/actionCreators";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function MainContent() {
  const dispatch = useDispatch();

  const { contents, loadingContents, errorContents } = useSelector(
    (state) => state.contentReducer
  );

  useEffect(() => {
    dispatch(fetchContents());
  }, [dispatch]);

  if (loadingContents) {
    return (
      <div className="m-10 w-screen">
        <div className="h-56 flex flex-wrap">Loading...</div>
      </div>
    );
  }

  if (errorContents) {
    return (
      <div className="m-10 w-screen">
        <div className="h-56 flex flex-wrap">Error...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col mt-24">
      <div className="bg-white">
        <h1 className="text-5xl pt-12 pb-8 text-blue-600">Main Content</h1>
      </div>
      <div className="flex flex-col md:flex-row mx-4 items-center">
        {contents.data.map((el, index) => {
          return <Card key={el.id} index={index} content={el} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
