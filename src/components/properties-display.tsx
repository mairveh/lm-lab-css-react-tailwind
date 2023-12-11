import { propertyData } from "../data/data";
import { Card } from "./card";

export const PropertiesDisplay = () => {
  console.log(propertyData.length);
  return (
    <>
    <div className="flex flex-wrap flex-row m-4">
      {propertyData.map((p) => (
        <Card property={p} />
      ))}
    </div>
    </>
  );
};
