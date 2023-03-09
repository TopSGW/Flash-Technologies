import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ReactElement } from "react";
export interface Props {
  label?: ReactElement;
  checkBoxBorderColor?: string;
  checkBoxBgColor?: string;
  margin?: string;
  marginTop?: string;

}

export default function CheckboxLabels({
  label,
  checkBoxBorderColor,
  checkBoxBgColor,
  margin,
  marginTop
}: Props) {
  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          "&.MuiFormControlLabel-labelPlacementEnd": {
            marginRight: "0px !important",
          },
        }}
        control={
          <Checkbox
            defaultChecked
            sx={{
              color: checkBoxBorderColor,
              margin: margin,
              "& .css-i4bv87-MuiSvgIcon-root": {
                color: "#FCBF07 ",
                marginTop: marginTop,
              },
              "&.Mui-checked": {
                color: checkBoxBgColor,
              },
              height: "0px",
              '& .MuiSvgIcon-root': { fontSize: 16 }
            }}

          />
        }
        label={label}
      />
    </FormGroup>
  );
}
