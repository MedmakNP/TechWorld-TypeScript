import ShopView from "./shopView";
import useData from "../../Firebase/firebaseConfig";
import React, { useEffect, useState } from "react";

const Shop: React.FC = () => {
  const data = useData("products");
  const [currentData, setCurrentData] = useState(data);
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setmaxCost] = useState(0);
  const [activeType, setActiveType] = useState("");
  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  const handleSortType = (value: string) => {
    const dataType = data;
    setCurrentData(dataType.filter((elem) => elem.type === value));
    setActiveType(value);
  };
  const handleReturn = () => {
    setCurrentData(data);
    setActiveType("");
  };
  const onInputChangeMin = (cost: number) => {
    setMinCost(cost);
  };
  const onInputChangeMax = (cost: number) => {
    setmaxCost(cost);
  };
  const handleSort = () => {
    const dataSort = currentData;
    setCurrentData(dataSort.sort((a, b) => b.cost[0] - a.cost[0]));
  };
  const hendleSortReverse = () => {
    const dataSort = currentData;
    setCurrentData(dataSort.sort((a, b) => b.cost[0] - a.cost[0]));
  };
  const filterCost = () => {
    const dataCost = data;
    setCurrentData(
      dataCost.filter(
        (elem) => elem.cost[0] >= minCost && elem.cost[0] <= maxCost,
      ),
    );
  };
  return (
    <ShopView
      currentData={currentData}
      handleSortType={handleSortType}
      activeType={activeType}
      handleReturn={handleReturn}
      onInputChangeMin={onInputChangeMin}
      onInputChangeMax={onInputChangeMax}
      filterCost={filterCost}
      handleSort={handleSort}
    />
  );
}

export default Shop;
