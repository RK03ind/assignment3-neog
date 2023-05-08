import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const Movies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [filterState, setFilterState] = useState({
    category: "All",
    rating: "All",
  });
  const categoryData = ["All", "Action", "Crime", "Drama"];

  const fetchData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/movies");
      if (response.status === 200) {
        setData(response.data);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  const handleCategoryChange = (e) => {
    setFilterState((prevState) => ({
      ...prevState,
      category: e.target.name,
    }));
  };

  const handleRatingChange = (e) => {
    setFilterState((prevState) => ({
      ...prevState,
      rating: e.target.value,
    }));
  };

  return (
    <div className="movies">
      <div className="category-filter">
        Category Filter:
        {categoryData.map((name) => {
          return (
            <>
              <input
                type="radio"
                name={name}
                id={name}
                checked={filterState.category === name}
                onChange={handleCategoryChange}
              />
              <label htmlFor={name}>{name}</label>
            </>
          );
        })}
      </div>
      <div className="rating-filter">
        Rating Filter:
        <select value={filterState.rating} onChange={handleRatingChange}>
          <option value="All">All</option>
          <option value="8.0">8.0+</option>
          <option value="8.5">8.5+</option>
          <option value="9.0">9.0+</option>
          <option value="9.5">9.5+</option>
        </select>
      </div>
      <div className="movies-list">
        <h2>Movies</h2>
        {isLoading && <span>Loading......</span>}
        {data
          .filter(
            ({ category, rating }) =>
              (filterState.category === "All" ||
                filterState.category === category) &&
              (filterState.rating === "All" || filterState.rating <= rating)
          )
          .map(({ title, rating, year }) => {
            return (
              <div className="movie-card">
                <h3>{title}</h3>
                <span>Rating: {rating}</span> - <span>Year: {year}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
