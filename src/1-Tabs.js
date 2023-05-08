import { useState } from "react";

// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.
export const Tabs = () => {
  const cityData = [
    {
      cityName: "London",
      description:
        "The capital city of England and the United Kingdom, known for its rich history, iconic landmarks",
    },
    {
      cityName: "Paris",
      description:
        "The capital city of France, known for its romantic ambiance, iconic Eiffel Tower",
    },
    {
      cityName: "Tokyo",
      description:
        "The capital city of Japan, known for its bustling streets, high-tech innovations",
    },
    {
      cityName: "New York",
      description:
        "The largest city in the United States, known for its iconic skyscrapers, diverse population",
    },
  ];
  const [tabState, setTabState] = useState();

  return (
    <div className="city-tabs">
      <h2>Tabs</h2>
      <div className="tab-container">
        <nav>
          {cityData.map(({ cityName }, index) => {
            return (
              <button
                onClick={() => {
                  setTabState(index);
                }}
              >
                {cityName}
              </button>
            );
          })}
        </nav>
        <h3>{cityData[tabState]?.cityName}</h3>
        <span>{cityData[tabState]?.description}</span>
      </div>
    </div>
  );
};
