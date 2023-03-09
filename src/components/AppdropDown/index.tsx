export interface AppdropDownProps {
  value?: any;
  options: {
    label?: string;
    value?: string;
  }[];
  onChange?: (event?: any) => void;
  maxWidth?: any;
  fontSize?: any;
  fontWeight?: any;
  lineHeight?: any;
  margin?: any;
  border?:string;   
}

const AppdropDown = ({
  value,
  options,
  onChange,
  maxWidth,
  fontSize,
  fontWeight,
  lineHeight,
  margin,
  border
}: AppdropDownProps) => {
  return (
    <>
      <label>
        <select
          value={value}
          onChange={onChange}
          style={{
            border: "1px solid #D1D5DB" || border,
            width: "100%",
            maxWidth: maxWidth,
            fontSize: fontSize,
            fontWeight: fontWeight,
            lineHeight: lineHeight,
            margin: margin,
            borderRadius:"6px",
            padding:"9px 13px"
          }}
        >
          {options.map((option) => (
            <option value={option.value} key={Math.random()} >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default AppdropDown;
