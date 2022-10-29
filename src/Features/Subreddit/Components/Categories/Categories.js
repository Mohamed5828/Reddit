import React from "react";
import { act } from "react-dom/test-utils";
import {
  AllCategories,
  CategoryH3,
  CategoryOl,
  CategoryHeader,
  ShowMoreBtn,
} from "./CategoriesStyle";

/**
 * Component that contains the categories [left section] of the community leaderboard page
 *
 * @returns {React.Component}
 */
export default function Categories() {
  let CategoryData = [
    { title: "All Communititles", selected: false, url: "#", id: 1 },
    { title: "Near You", selected: false, url: "#", id: 2 },
    { title: "Gaming", selected: false, url: "#", id: 3 },
    { title: "Sports", selected: false, url: "#", id: 4 },
    { title: "News", selected: false, url: "#", id: 5 },
    { title: "Tv", selected: false, url: "#", id: 6 },
  ];
  const [currentCategory, setCurrentCategory] = React.useState(1);
  function selectCategory(id) {
    CategoryData.map((item) => {
      item.id === id ? (item.selected = true) : (item.selected = false);
    });
  }
  function handleChange(id) {
    selectCategory(id);
    console.log(CategoryData);
  }
  let CatergoryElement = CategoryData.map((element) => {
    return (
      <li>
        <a
          className={element.selected ? "current-cat" : "cat"}
          href={element.url}
          isSelected={element.selected}
          onClick={() => handleChange(element.id)}
        >
          {element.title}
        </a>
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
