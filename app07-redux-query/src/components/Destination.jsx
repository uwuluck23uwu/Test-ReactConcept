import React from "react";
import { useDeleteDestinationMutation } from "../api/destinationApi";

export const Destination = ({ destination }) => {
  const [deleteDestination] = useDeleteDestinationMutation();

  return (
    <div
      className="row py-1"
      key={destination.id}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-3 offset-3">
        {destination.city}, {destination.country}
      </div>

      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-2">
        <button
          className="btn form-control btn-danger"
          onClick={() => deleteDestination({ id: destination.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
