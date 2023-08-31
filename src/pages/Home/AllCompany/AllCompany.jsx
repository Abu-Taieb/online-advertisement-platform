import { useEffect } from "react";
import { useState } from "react";
import AllCompanyCard from "./AllCompanyCard";

const AllCompany = () => {
  const [allCompanies, setAllCompanies] = useState([]);

  useEffect(() => {
    fetch("/advertisement.json")
      .then((res) => res.json())
      .then((data) => setAllCompanies(data));
  }, []);

  return (
    <div className="py-12 w-11/12 mx-auto mb-10">
      <div className="text-center py-5 my-20">
        <h4 className="font-bold py-3 uppercase text-orange-500">
          Our All Brand Companies
        </h4>
        <h2 className="font-bold text-3xl  uppercase">
          Grow up your business like this company
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 ">
        {allCompanies.map((allCompany) => (
          <AllCompanyCard
            key={allCompany.id}
            allCompany={allCompany}
          ></AllCompanyCard>
        ))}
      </div>
    </div>
  );
};

export default AllCompany;
