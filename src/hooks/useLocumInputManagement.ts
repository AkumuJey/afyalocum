import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, } from "react";

type SetHandler<T> = (value: T) => void;


const useLocumInputManagement = () => {
    const handleSelectChange = <T>(e: SelectChangeEvent, setHandler: SetHandler<T>) => {
        const { name, value } = e.target;
        const goal = { [name]: value } as T;
        setHandler(goal);
    };
    
    const handleInputChange = <T>(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setHandler: SetHandler<T>) => {
        const { name, value } = e.target;
        const goal = { [name]: value } as T;
        setHandler(goal)
    }
    return {handleInputChange, handleSelectChange}
}


export default useLocumInputManagement