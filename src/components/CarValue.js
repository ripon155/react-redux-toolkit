import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars.reduce((acc, data) => {
      return data.cost + acc;
    }, 0);
  });
  console.log(totalCost);
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
