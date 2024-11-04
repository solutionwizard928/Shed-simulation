import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";

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

export default function ColoursAndStyle({ toggleState, onClick }) {
  const [color, setColor] = React.useState("");
  const [roof, setRoof] = React.useState("");
  const [advancedOptions, setAdvancedOptions] = React.useState(false);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleRoof = (event) => {
    setRoof(event.target.value);
  };

  const handleAdvancedOptions = (event) => {
    setAdvancedOptions(event.target.checked);
  };

  const handleSearch = () => {};

  return (
    <Drawer open={toggleState} onClose={() => onClick(false)}>
      <Box
        sx={{ width: 400 }}
        role="presentation"
        style={{
          pointerEvents: "auto", // Sidebar is interactive
          backgroundColor: "rgba(255,255,255,0.8)",
          marginLeft: "64px",
          zIndex: "1",
        }}
      >
        <div style={{ margin: "10px" }}>
          <CloseIcon
            style={{
              marginLeft: "340px",
              paddingTop: "6px",
              paddingBottom: "6px",
              width: "40px",
              height: "40px",
              color: "#757575",
              cursor: "pointer",
            }}
            onClick={() => onClick(false)}
          />

          <div className="divider"></div>
          <div>
            <Switch
              checked={advancedOptions}
              onChange={handleAdvancedOptions}
            />
            <span>Show Advanced Options</span>
          </div>
          {!advancedOptions ? (
            <div>
              <div>
                <TextField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  select
                  label=""
                  onChange={handleColorChange}
                  style={{ width: "100%", marginTop: "40px", border : "none" }}
                  MenuProps={MenuProps}
                >
                  <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    style={{ width: "100%" }}
                    onChange={handleSearch}
                  />
                  <MenuItem
                    value={"Basalt"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Basalt</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#656668",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>
                  <MenuItem
                    value="Bluegum"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Bluegum</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#969799",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>
                  <MenuItem
                    value="Bluegum_Matt_Finish"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Bluegum Matt finish</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#969b9b",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Classic_Cream"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Classic Cream</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#e7d4b0",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Cottage_Green"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Cottage Green</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#0e4a39",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Deep_Ocean"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Cottage Green</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#273c4f",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Dover_White"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Dover White</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#f9fbf1",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Dune"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Dune</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#a8a59c",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Evening Haze"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Evening Haze</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#bfb9a1",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Gully</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#7f776e",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Ironstone</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#343e4c",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Jasper</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#675d51",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Manor Red</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#65100f",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Monument</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#35363d",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Night Sky</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#2b2b2b",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Pale Eucalypt</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#74826b",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Paperbark</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#c6b69b",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Shale Grey</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#b1b6b1",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Southerly</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#d2d1cb",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Surfmist</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#dcdacc",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Wallaby</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#767572",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Windspray</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#7a8181",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Wollemi</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#0a1c0d",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Woodland Grey</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#464a44",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>

                  <MenuItem
                    value="Gully"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Zinc</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#efefef",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>
                </TextField>
              </div>
              <div>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Button
                    style={{
                      backgroundColor: "#004483",
                      color: "white",
                      width: "100%",
                      textTransform: "none",
                      fontWeight: "600",
                    }}
                  >
                    Apply to Shed
                  </Button>
                </div>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Button
                    style={{
                      backgroundColor: "#004483",
                      color: "white",
                      width: "100%",
                      textTransform: "none",
                      fontWeight: "600",
                    }}
                  >
                    Apply to Doors
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                font: "400 14px/20px Roboto,Helvetica Neue,sans-serif",
                letterSpacing: "normal",
                color: "#000000de",
                paddingLeft: "1px",
                paddingRight: "10px",
                marginTop: "20px",
              }}
            >
              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
              >
                Roof
              </label>

              <div>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  value={roof}
                  label="Corrugated"
                  style={{ width: "100%", marginTop: "40px" }}
                  MenuProps={MenuProps}
                  onChange={handleRoof}
                >
                  <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                    style={{ width: "100%" }}
                  />
                  <MenuItem
                    value={"Corrugated"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Corrugated</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#656668",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>
                  <MenuItem
                    value="Trimdek"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <label>Trimdek</label>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#969799",
                        borderRadius: "7px",
                      }}
                    ></div>
                  </MenuItem>
                </Select>
              </div>
            </div>
          )}
        </div>
      </Box>
    </Drawer>
  );
}
