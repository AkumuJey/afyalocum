import { useParams } from "react-router-dom";
import NewLocumFormLayout from "../../components/Dashboard/CreateLocums/NewLocumFormLayout";

const LocumEdit = () => {
    const {id} = useParams()
  return (
    <>
    <div>{id}</div>
      <NewLocumFormLayout />
    </>
  );
};

export default LocumEdit;
