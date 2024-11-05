import * as React from "react";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const colors = [
  { name: "Basalt", color: "#656668" },
  { name: "Bluegum", color: "#969799" },
  { name: "Bluegum Matt Finish", color: "#969b9b" },
  { name: "Classic Cream", color: "#e7d4b0" },
  { name: "Cottage Green", color: "#0e4a39" },
  { name: "Deep Ocean", color: "#273c4f" },
  { name: "Dover White", color: "#f9fbf1" },
  { name: "Dune", color: "#a8a59c" },
  { name: "Evening Haze", color: "#bfb9a1" },
  { name: "Gully", color: "#7f776e" },
  { name: "Ironstone", color: "#343e4c" },
  { name: "Jasper", color: "#675d51" },
  { name: "Manor Red", color: "#65100f" },
  { name: "Monument", color: "#35363d" },
  { name: "Night Sky", color: "#2b2b2b" },
  { name: "Pale Eucalypt", color: "#74826b" },
  { name: "Paperbark", color: "#c6b69b" },
  { name: "Shale Grey", color: "#b1b6b1" },
  { name: "Southerly", color: "#d2d1cb" },
  { name: "Surfmist", color: "#dcdacc" },
  { name: "Wallaby", color: "#767572" },
  { name: "Windspray", color: "#7a8181" },
  { name: "Wollemi", color: "#0a1c0d" },
  { name: "Woodland Grey", color: "#464a44" },
  { name: "Zinc", color: "#dadada" },
];

export default function ColorSelector() {

  const [color, setColor] = React.useState("Zinc");
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredColors = colors.filter((c) =>
    c.name.toLowerCase().includes(searchTerm)
  );

  return (
    <Select
      labelId="demo-simple-select-label"
      className="demo-simple-select1"
      id="demo-simple-select1"
      value={color}
      label="Zinc"
      defaultValue="Zinc"
      onChange={handleColorChange}
      style={{ width: "100%", marginTop: "10px", border: "none" }}
      MenuProps={MenuProps}
    >
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        fullWidth
        style={{ width: "100%" }}
        onChange={handleSearch}
      />
      {filteredColors.map((colorItem) => (
        <MenuItem
          key={colorItem.name}
          value={colorItem.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <label>{colorItem.name}</label>
          </div>
          <div
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: colorItem.color,
              borderRadius: "7px",
            }}
          ></div>
        </MenuItem>
      ))}
    </Select>
  );
}
