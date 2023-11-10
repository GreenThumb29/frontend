import { useQuery } from "@apollo/client";
import { useState } from "react";
import Placeholder from "./placeholder";

const ProgramList = ({ gqlQuery }) => {
  const [activeToggle, setActiveToggle] = useState(-1);
  const { loading, error, data } = useQuery(gqlQuery);

  console.log(data, "sdfsdsfsd");
  return (
    <div className=" mt-20 lg:mt-32 w-full ">
      <h2 className=" text-app.yellow font-medium mb-3 ">
        Programs based on your selection:
      </h2>
      {loading ? (
        <Placeholder />
      ) : (
        <div mb-12>
          {data?.programs.map((scheme, id) => {
            return (
              <div key={id} className=" bg-app.darkGreen mt-2 px-3 py-4 text-yellow-50 rounded-sm shadow-md">
                <h2 className=" font-medium">{scheme?.title}</h2>
                <h3 className=" italic text-xs">{scheme?.fundingScemeType}</h3>
                <a
                target="_blank"
                  href={scheme?.url}
                  className=" italic text-xs mt-3 text-app.yellow border-dotted border-b"
                >
                  {scheme?.url}
                </a>
                <p className=" mt-3 text-sm line-clamp-1">
                  {scheme?.descprition}
                </p>
                <p
                  className={` ${
                    id === activeToggle ? "line-clamp-none" : "line-clamp-3"
                  } text-sm`}
                >
                  {scheme?.eligibilityCriteria?.extraEligibilities}
                </p>
                <span
                  onClick={() =>
                    activeToggle === id
                      ? setActiveToggle(-1)
                      : setActiveToggle(id)
                  }
                  className=" italic text-yellow-100 text-xs cursor-pointer"
                >
                  {activeToggle === id ? "(Hide)" : "(Show More)"}
                </span>
              </div>
            );
          })}

          <button className="mt-24">Contact Us for more information</button>
        </div>
      )}
    </div>
  );
};

export default ProgramList;
