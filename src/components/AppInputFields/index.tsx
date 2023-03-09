import { InputAdornment, TextField } from "@mui/material";
import { InputProps } from "../../types/inputType";

const AppInputFields = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  placeholder,
  margin,
  width,
  border,
  borderRadius,
  className,
  inputIcon,
  position,
  checkMultiLine,
  maxRows,
  alignItems,
  height,
}: InputProps) => {
  return (
    <>
      <TextField
        sx={{
          borderRadius: borderRadius || "0px",
          backgroundColor: "white",
          width: width || "100%",
          display: "flex",
          alignItems: "flex-start",

          margin: margin,
          "&:hover": {
            border: "none",
            backgroundColor: "",
            color: "blue",
          },
          " & .MuiOutlinedInput-notchedOutline": {
            border: border || "none",
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: padding || "12px 16px",
            color: color || "#848484",
            fontWeight: fontWeight || "400",
            fontSize: fontSize || "16px",
            lineHeight: lineHeight || "24px",
            // margin:margin,
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input:hover": {
            color: "black",
          },
          "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: padding || "16.5px 14px !important",
          },
          "& .css-111avd1-MuiInputBase-root-MuiOutlinedInput-root": {
            height: height,
            alignItems: alignItems,
          },
        }}
        placeholder={placeholder}
        fullWidth
        // style={{color:color}}
        className={className}
        InputProps={{
          startAdornment: (
            <InputAdornment position={"start" || position}>
              {inputIcon}
            </InputAdornment>
          ),
        }}
        multiline={checkMultiLine ? true : false}
        maxRows={maxRows}
      />
    </>
  );
};

export default AppInputFields;
