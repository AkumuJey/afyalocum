import { TabPanel } from "@mui/lab";
import NewLocumForm from "./NewLocumForm";

interface Props {
  value: string;
}
const CreateNewLocum = ({ value }: Props) => {
  return (
    <>
      <TabPanel
        value={value}
        sx={{
          width: "100%",
        }}
      >
        <NewLocumForm />
      </TabPanel>
    </>
  );
};

export default CreateNewLocum;
