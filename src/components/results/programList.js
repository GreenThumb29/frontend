import { useQuery } from "@apollo/client";
import { useState } from "react";
import Placeholder from "./placeholder";

const ProgramList = ({ gqlQuery }) => {
  const [activeToggle, setActiveToggle] = useState(-1);
  const { loading, error, data } = useQuery(gqlQuery);

  console.log(data, "sdfsdsfsd");
  return (
    <div className=" my-20 lg:mt-32 w-full ">
      <h2 className=" text-app.yellow font-medium mb-3 ">
        Programs based on your selection:
      </h2>
      <p className="text-app.yellow mb-3 text-xs ">
        Reminder: The result might not be 100% accurate. Contact us, we are
        happy to help you.
      </p>
      {loading ? (
        <Placeholder />
      ) : (
        <div mb-12>
          {data?.programs.length > 0 &&
            data?.programs?.map((scheme, id) => {
              return (
                <div
                  key={id}
                  className=" bg-app.darkGreen mt-2 px-3 py-4 text-yellow-50 rounded-sm shadow-md"
                >
                  <h2 className=" font-medium">{scheme?.title}</h2>
                  <h3 className=" italic text-xs">
                    {scheme?.fundingScemeType}
                  </h3>
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

          {data?.programs.length === 0 && (
            <div>
              <h1 className="text-app-yellow text-center">
                Sorry No Result Found. Still you can contact Us, We might help
                you find what you are looking for.
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgramList;
