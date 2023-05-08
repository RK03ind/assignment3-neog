import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const Movies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [filterState, setFilterState] = useState({
    category: "All",
    rating: "All",
  });

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
        <input
          type="radio"
          name="All"
          checked={filterState.category === "All"}
          onChange={handleCategoryChange}
        />
        <label>All</label>
        <input
          type="radio"
          name="Action"
          checked={filterState.category === "Action"}
          onChange={handleCategoryChange}
        />
        <label>Action</label>
        <input
          type="radio"
          name="Crime"
          checked={filterState.category === "Crime"}
          onChange={handleCategoryChange}
        />
        <label>Crime</label>
        <input
          type="radio"
          name="Drama"
          checked={filterState.category === "Drama"}
          onChange={handleCategoryChange}
        />
        <label>Drama</label>
      </div>
      <div className="rating-filter">
        Rating Filter:{" "}
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
          .filter(({ category, rating }) =>
            filterState.category === "All" && filterState.rating === "All"
              ? true
              : filterState.category === category &&
                filterState.rating >= rating
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
