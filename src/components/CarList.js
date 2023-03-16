import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleDelete(car)}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list is-3">
      {renderCars}
      <hr />
    </div>
  );
}

export default CarList;
