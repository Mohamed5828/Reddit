import React, { useEffect, useState, useContext } from "react";
import { act } from "react-dom/test-utils";
import { Link, useParams } from "react-router-dom";
import {
  AllCategories,
  CategoryH3,
  CategoryOl,
  CategoryHeader,
  ShowMoreBtn,
} from "./CategoriesStyle";

import { DataContext } from "Features/Subreddit/Services/DataContext";

/**
 * Component that contains the categories [left section] of the community leaderboard page
 *
 * @returns {React.Component}
 */
export default function Categories() {
  // function selectCategory(id) {
  //   CategoryData.map((item) => {
  //     item.id === id ? (item.selected = true) : (item.selected = false);
  //   });
  // }

  let CategoryData = [
    { title: "All Communititles", url: "#", id: 1 },
    { title: "Near You", url: "#", id: 2 },
    { title: "Gaming", url: "#", id: 3 },
    { title: "Sports", url: "#", id: 4 },
    { title: "News", url: "#", id: 5 },
    { title: "Tv", url: "#", id: 6 },
  ];
  const [currentCategory, setCurrentCategory] = React.useState([]);
  const { categorytype } = useParams();

  let { communityData, setCommunityData } = useContext(DataContext);
  useEffect(() => {
    setCurrentCategory(CategoryData);
    setCommunityData((e) =>
      e.filter((item) => item.title === "r/mildlyinteresting")
    );
  }, []);
  function handleChange(id) {
    console.log(categorytype);
  }

  let CatergoryElement = currentCategory.map((element) => {
    return (
      <li>
        <Link
          className={false ? "current-cat" : "cat"}
          to={`/category/${element.title}`}
          onClick={() => handleChange(element.id)}
        >
          {element.title}
        </Link>
      </li>
    );
  });

  return (
    <AllCategories>
      <CategoryHeader>
        <CategoryH3>Categories</CategoryH3>
      </CategoryHeader>
      <div className="categories">
        <CategoryOl>{CatergoryElement}</CategoryOl>
        <ShowMoreBtn>See More</ShowMoreBtn>
      </div>
    </AllCategories>
  );
}
