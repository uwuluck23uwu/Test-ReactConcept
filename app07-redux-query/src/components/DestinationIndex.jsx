import { AddDestination} from "./AddDestination";
import { DestinationList } from "./DestinationList";

export const DestinationIndex = () => {
  return (
    <div className="text-white-50">
      <h1 className="text-success text-center">Travel List</h1>
      <AddDestination />
      <DestinationList/>
    </div>
  );
};
