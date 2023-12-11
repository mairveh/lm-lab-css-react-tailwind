export interface IProperty {
  property: {
    location: string;
    country: string;
    property_type: string;
    bedroom_count: number;
    bathroom_count: number;
    price: string;
    image_urls: string[];
    title: string;
    description: string;
  };
}

export const Card: React.FC<IProperty> = ({
  property: {
    title,
    location,
    country,
    property_type,
    image_urls,
    description,
    bedroom_count,
    bathroom_count,
    price,
  },
}) => {
  return (
    <>
      <div className="basis-2/4 flex flex-col justify-end justify-self-end justify-items-end flex-wrap border-2 m-0 p-4 border-green-400 align-middle">
        <h4 className="text-lg font-bold">{title}</h4>
        <ol>
          <li>Location: {location}</li>
          <li>Country: {country}</li>
          <li>Type: {property_type}</li>
          <li>Description: {description}</li>
          <li>Number of bedroom(s): {bedroom_count}</li>
          <li>Number of bathrooms: {bathroom_count}</li>
          <li>Price: {price}</li>
        </ol>
        <img className="object-scale-down h-48" src={image_urls[0] } />
      </div>
    </>
  );
};
