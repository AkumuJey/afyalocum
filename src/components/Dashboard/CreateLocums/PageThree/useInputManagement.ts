import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, } from "react"


const handleSelectChange = (e: SelectChangeEvent, setHandler: unknown) => {
    const { name, value } = e.target;
    let goal = { [name]: value };
    setHandler(goal);
};
const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setHandler: unknown) => {
    const { name, value } = e.target;
    let goal = { [name]: value };
    setHandler(goal)
}
const useInputManagement = () => {
    return {handleInputChange, handleSelectChange}
}


export default useInputManagement