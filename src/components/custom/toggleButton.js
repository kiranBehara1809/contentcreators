import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";

const ToggleBtn = (props) => {
    const [ list, setList ] = useState(props.toggleBtnListCongif);
    const [ currentSelected , setCurrentSelected ] = useState("")
    const handleToggleChange = (e) => {
        props.selectedToggle(e.target.value)
        setCurrentSelected(e.target.value)
    }
    return (
      <>
        <ToggleButtonGroup
          value={currentSelected}
          sx={{
            width: "100% !important",
            height: "40px",
            
          }}
        >
          {list.map((x) => {
            return (
              <ToggleButton
                onClick={handleToggleChange}
                value={x.value}
                aria-label={x.label}
                key={x.value}
                sx={{
                  width: "100%",
                  textTransform: "capitalize",
                }}
              >
                {x.displayValue}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </>
    );
}

export default ToggleBtn;