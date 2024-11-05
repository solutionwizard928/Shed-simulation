import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

import Select from "@mui/material/Select";
import ColorSelector from "./ColorSelector";

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
  const [color, setColor] = React.useState("Zinc");
  const [roof, setRoof] = React.useState("Trimdek");
  const [external_wall, setExternalWall] = React.useState("Trimdek");
  const [internal_wall, setInternalWall] = React.useState("Trimdek");
  const [advancedOptions, setAdvancedOptions] = React.useState(false);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleRoof = (event) => {
    setRoof(event.target.value);
  };

  const handleExternalWall = (event) => {
    setExternalWall(event.target.value);
  };

  const handleInternalWall = (event) => {
    setInternalWall(event.target.value);
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
                <ColorSelector />
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
                }}
              >
                Roof
              </label>

              <div style={{ marginBottom: "30px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select1"
                  className="demo-simple-select1"
                  value={roof}
                  label="Corrugated"
                  style={{ width: "100%", marginTop: "10px" }}
                  MenuProps={MenuProps}
                  onChange={handleRoof}
                >
                  <MenuItem
                    value={"Corrugated"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Corrugated</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <path
                        id="shape0"
                        transform="translate(0.281249980006078, -0.000336647387961381)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-miterlimit="2"
                        d="M0 0.363618C3.72113 12.9933 6.03596 19.7444 6.9445 20.6169C8.3073 21.9257 12.6218 23.7831 15.6287 20.0203C17.6332 17.5117 20.2221 4.98984 21.5949 2.32053C22.9677 -0.348779 29.2555 -0.864461 31.0082 2.32053C32.7609 5.50552 35.1365 18.2733 37.0407 20.4843C38.9449 22.6953 45.5401 22.4762 46.7812 18.6566C48.0224 14.8369 49.6333 6.95351 52.0226 2.91715C54.4119 -1.1192 60.6487 -0.0707252 61.7674 4.24298C62.8861 8.55668 63.5048 14.2746 67.0707 19.49C70.6365 24.7053 76.3166 21.4203 77.2795 18.4956C78.2424 15.5709 79.4217 5.33385 82.5828 2.65199C84.6903 0.864076 87.0689 -0.0198075 89.7188 0.000336647"
                      />
                    </svg>
                  </MenuItem>
                  <MenuItem
                    value="Trimdek"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Trimdek</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <defs />
                      <path
                        id="shape0"
                        transform="translate(0, 0.339843748470468)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape0"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 30.3873775096099 0.333999986005932)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape01"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 60.3767226049007 0.333999986005931)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                    </svg>
                  </MenuItem>
                </Select>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                External Walls
              </label>

              <div style={{ marginBottom: "30px" }}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select2"
                  className="demo-simple-select1"
                  value={external_wall}
                  label="Corrugated"
                  style={{ width: "100%", marginTop: "10px" }}
                  MenuProps={MenuProps}
                  onChange={handleExternalWall}
                >
                  <MenuItem
                    value={"Corrugated"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Corrugated</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <path
                        id="shape0"
                        transform="translate(0.281249980006078, -0.000336647387961381)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-miterlimit="2"
                        d="M0 0.363618C3.72113 12.9933 6.03596 19.7444 6.9445 20.6169C8.3073 21.9257 12.6218 23.7831 15.6287 20.0203C17.6332 17.5117 20.2221 4.98984 21.5949 2.32053C22.9677 -0.348779 29.2555 -0.864461 31.0082 2.32053C32.7609 5.50552 35.1365 18.2733 37.0407 20.4843C38.9449 22.6953 45.5401 22.4762 46.7812 18.6566C48.0224 14.8369 49.6333 6.95351 52.0226 2.91715C54.4119 -1.1192 60.6487 -0.0707252 61.7674 4.24298C62.8861 8.55668 63.5048 14.2746 67.0707 19.49C70.6365 24.7053 76.3166 21.4203 77.2795 18.4956C78.2424 15.5709 79.4217 5.33385 82.5828 2.65199C84.6903 0.864076 87.0689 -0.0198075 89.7188 0.000336647"
                      />
                    </svg>
                  </MenuItem>
                  <MenuItem
                    value="Trimdek"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Trimdek</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <defs />
                      <path
                        id="shape0"
                        transform="translate(0, 0.339843748470468)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape0"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 30.3873775096099 0.333999986005932)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape01"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 60.3767226049007 0.333999986005931)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                    </svg>
                  </MenuItem>
                </Select>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Internal Walls
              </label>

              <div>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select3"
                  className="demo-simple-select1"
                  value={internal_wall}
                  label="Corrugated"
                  style={{ width: "100%", marginTop: "10px" }}
                  MenuProps={MenuProps}
                  onChange={handleInternalWall}
                >
                  <MenuItem
                    value={"Corrugated"}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Corrugated</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <path
                        id="shape0"
                        transform="translate(0.281249980006078, -0.000336647387961381)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        stroke-miterlimit="2"
                        d="M0 0.363618C3.72113 12.9933 6.03596 19.7444 6.9445 20.6169C8.3073 21.9257 12.6218 23.7831 15.6287 20.0203C17.6332 17.5117 20.2221 4.98984 21.5949 2.32053C22.9677 -0.348779 29.2555 -0.864461 31.0082 2.32053C32.7609 5.50552 35.1365 18.2733 37.0407 20.4843C38.9449 22.6953 45.5401 22.4762 46.7812 18.6566C48.0224 14.8369 49.6333 6.95351 52.0226 2.91715C54.4119 -1.1192 60.6487 -0.0707252 61.7674 4.24298C62.8861 8.55668 63.5048 14.2746 67.0707 19.49C70.6365 24.7053 76.3166 21.4203 77.2795 18.4956C78.2424 15.5709 79.4217 5.33385 82.5828 2.65199C84.6903 0.864076 87.0689 -0.0198075 89.7188 0.000336647"
                      />
                    </svg>
                  </MenuItem>
                  <MenuItem
                    value="Trimdek"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ paddingBottom: "10px" }}>
                      <label>Trimdek</label>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90pt"
                      height="22.5pt"
                    >
                      <defs />
                      <path
                        id="shape0"
                        transform="translate(0, 0.339843748470468)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="round"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape0"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 30.3873775096099 0.333999986005932)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                      <path
                        id="shape01"
                        transform="matrix(1.00000000128198 0 0 1.00000000128198 60.3767226049007 0.333999986005931)"
                        fill="none"
                        stroke="#000000"
                        stroke-width="0.75"
                        stroke-linecap="square"
                        stroke-linejoin="bevel"
                        d="M0 0.128906L7.55859 21.8086L15.3047 21.7852L22.875 0.046875L30.3633 0L22.9219 0.128906L15.3047 21.832L7.85156 21.8203Z"
                      />
                    </svg>
                  </MenuItem>
                </Select>
                <ColorSelector />
              </div>

              <div
                className="divider"
                style={{ marginTop: "40px", marginBottom: "20px" }}
              ></div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Personal Access Doors
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Roller Doors
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Sliding Doors
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Whirlybirds / Spin Aways
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <div
                className="divider"
                style={{ marginTop: "40px", marginBottom: "20px" }}
              ></div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Gutters
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Ridge Cap
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Barge Trim
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>

              <label
                style={{
                  color: "#004483",
                  fontWeight: "600",
                }}
              >
                Wall Corner
              </label>

              <div style={{ marginBottom: "20px" }}>
                <ColorSelector />
              </div>
            </div>
          )}
        </div>
      </Box>
    </Drawer>
  );
}
