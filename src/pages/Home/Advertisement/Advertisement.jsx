import { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";

const Advertisement = () => {
  const [adds, setAdds] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('advertisement.json')
      .then((res) => res.json())
      .then((data) => setAdds(data));
  }, []);

  const filterData = showAll ? adds : adds.slice(0, 6);
  const handleSeeMoreClick = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-10 w-11/12 mx-auto text-center">
      <div className="text-center py-5 mb-20">
        <h4 className="font-bold py-3 uppercase text-orange-500">
          Our Latest Advertisement Company
        </h4>
        <h2 className="font-bold text-3xl  uppercase">
          Grow up your business like this company
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 ">
        {filterData.map((add) => (
          <AdvertiseCard key={add?._id} add={add}></AdvertiseCard>
        ))}
      </div>
      {!showAll && (
        <button
          className="btn border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 mt-16 rounded-full"
          onClick={handleSeeMoreClick}
        >
          Show all company
        </button>
      )}
    </div>
  );
};

export default Advertisement;
