import { useGetAllDestinationQuery } from "../api/destinationApi";

export const DestinationList = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <article key={destination.id}>
          <div className="text-center text-info p-2">
            <div>
              {destination.city}, {destination.country} - {" "}
              {destination.daysNeeded} days
            </div>
          </div>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }
    return <div className="pt-3">{content}</div>;
};
