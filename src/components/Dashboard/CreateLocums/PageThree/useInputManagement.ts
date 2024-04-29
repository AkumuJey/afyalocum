import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, } from "react";
import { PartThree } from "../hooks/useJobForm";

// type SetHandler = (partThree: PartThree |) => void

const useInputManagement = () => {
    const handleSelectChange = (e: SelectChangeEvent, setHandler: unknown) => {
        const { name, value } = e.target;
        const goal = { [name]: value };
        setHandler(goal);
    };
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setHandler: unknown) => {
        const { name, value } = e.target;
        const goal = { [name]: value };
        setHandler(goal)
    }
    return {handleInputChange, handleSelectChange}
}


export default useInputManagement