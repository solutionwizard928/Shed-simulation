import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import InfoIcon from "@mui/icons-material/Info";

export default function Settings({ toggleState, onClick }) {
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
          backgroundColor : "rgba(255, 255, 255, 0.2    )"
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

          <div
            style={{
              font: "400 14px/20px Roboto,Helvetica Neue,sans-serif",
              letterSpacing: "normal",
              color: "#000000de",
              paddingLeft: "1px",
              paddingRight: "10px",
            }}
          >
            <label
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "15px",
                marginBottom: "10px",
              }}
            >
              Building Classification
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <TextField
                id="outlined-select-currency"
                select
                label="Class"
                defaultValue="8"
                style={{ width: "200px" }}
              >
                <MenuItem value={8}>Class 8</MenuItem>
                <MenuItem value={10}>Class 10</MenuItem>
              </TextField>
            </div>
            <div style={{ color: "#004483", opacity: "0.7" }}>
              <div style={{ marginTop: "10px" }}>
                <i>
                  <InfoIcon style={{ width: "15px", height: "15px" }} /> Class
                  10 - Non-habitable structures:{" "}
                </i>
              </div>
              <li style={{ marginLeft: "20px", marginTop: "10px" }}>
                <i>Sheds, Carports, Private Garages</i>
              </li>
            </div>

            <div className="divider"></div>

            <div
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Girts and Purlins
            </div>

            <div style={{ marginBottom: "10px" }}>
              <Switch /> Split Girts and Purlins
            </div>

            <TextField
              id="outlined-number1"
              label="Overlap"
              type="number"
              defaultValue={300}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <TextField
              id="outlined-number1"
              label="Minimun Length"
              type="number"
              defaultValue={200}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <TextField
              id="outlined-number1"
              label="Maximum Length"
              type="number"
              defaultValue={9500}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <div className="divider"></div>

            <div
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Girts
            </div>

            <div>
              <Switch /> Split Simple Openings
            </div>

            <div>
              <Switch /> Setback Simple Openings
            </div>

            <TextField
              id="outlined-number1"
              label="Girt Distance from Ground"
              type="number"
              defaultValue={300}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginTop: "20px", marginBottom: "10px" }}
            />

            <TextField
              id="outlined-number1"
              label="Maximum Girt Spacing"
              type="number"
              defaultValue={1600}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
            />

            <div className="divider"></div>

            <div
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Purlins
            </div>

            <TextField
              id="outlined-number1"
              label="Purlin Distance to Apex"
              type="number"
              defaultValue={150}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            />

            <TextField
              id="outlined-number1"
              label="Center of Purlin to Apex Distance"
              type="number"
              defaultValue={150}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            />

            <TextField
              id="outlined-number1"
              label="Maximum Purlin Spacing"
              type="number"
              defaultValue={1200}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              style={{ width: "100%", marginTop: "10px", marginBottom: "20px" }}
            />

            <div className="divider"></div>

            <div
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Sliding Panels
            </div>

            <div>
              <Switch /> Extend Girts At Sliding Panel Corner
            </div>
            <div>
              <Switch /> Create Extra Girt To Extend
            </div>
            <div>
              <TextField
                id="outlined-number1"
                label="Minimum Inner Frame Spacing"
                type="number"
                defaultValue={400}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />

              <div className="divider"></div>

              <div
                style={{
                  color: "#004483",
                  fontWeight: "600",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Cladding Layout
              </div>

              <div style={{ display: "flex" }}>
                <span style={{ alignSelf: "center", marginRight: "5px" }}>
                  {" "}
                  <Switch />
                  Show Claddings
                </span>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Cladding Direction"
                  defaultValue="front_right"
                  style={{ width: "200px" }}
                >
                  <MenuItem value={"front_right"}>Front Right</MenuItem>
                  <MenuItem value={"front_left"}>Front Left</MenuItem>
                  <MenuItem value={"back_right"}>Back Right</MenuItem>
                  <MenuItem value={"back_left"}>Back Left</MenuItem>
                </TextField>
              </div>
              <div>
                <Switch /> Use Wall Cladding for Sliding Panels
              </div>

              <div style={{ color: "#004483", opacity : "0.9"}}>
                <InfoIcon style={{ width: "20px", height: "20px", marginRight : "5px", color : "" }} />
                <i style={{fontSize : "12px"}}>
                  When enabled, Shedmate will use the same wall cladding for
                  sliding panels when colours are the same
                </i>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
