import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";


const label = { inputProps: { "aria-label": "Switch demo" } };

export default function WallAndSlabs({ toggleState, onClick }) {
  return (
    <Drawer open={toggleState} onClose={() => onClick(false)}>
      <Box
        sx={{ width: 400 }}
        role="presentation"
        style={{
          pointerEvents: "auto", // Sidebar is interactive
          backgroundColor: "rgba(255,255,255,0.2)",
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
          {/* <div
            style={{
              display: "flex",
              justifyContent : "center",
              paddingTop: "10px",
              paddingBottom : "10px",
              paddingLeft : "15px",
              paddingRight: "15px",
            }}
          >
            <label>Front</label>
            <button></button>
          </div> */}
          <div className="shed-plain-walls">
            <span className="front">Front</span>
            <span className="left">Left</span>
            <div className="bay">
              <button className="wall-btn top-center"></button>
              <button className="wall-btn middle-right"></button>
              <button className="wall-btn middle-left"></button>
              <button className="wall-btn center-center"></button>
              <button className="wall-btn bottom-center"></button>
              <Checkbox
                style={{
                  gridColumn: "5",
                  gridRow: "2",
                  marginLeft: "3px",
                  alignSelf: "center",
                }}
                {...label}
                defaultChecked
              />
            </div>
            <div className="bay">
              <button className="wall-btn middle-right"></button>
              <button className="wall-btn middle-left"></button>
              <button className="wall-btn center-center"></button>
              <button className="wall-btn bottom-center"></button>
              <Checkbox
                style={{
                  gridColumn: "5",
                  gridRow: "2",
                  marginLeft: "3px",
                  alignSelf: "center",
                }}
                {...label}
                defaultChecked
              />
            </div>
            <div className="bay">
              <button className="wall-btn middle-right"></button>
              <button className="wall-btn middle-left"></button>
              <button className="wall-btn center-center"></button>
              <button className="wall-btn bottom-center"></button>
              <Checkbox
                style={{
                  gridColumn: "5",
                  gridRow: "2",
                  marginLeft: "3px",
                  alignSelf: "center",
                }}
                {...label}
                defaultChecked
              />
            </div>
            <div className="bay">
              <button className="wall-btn middle-right"></button>
              <button className="wall-btn middle-left"></button>
              <button className="wall-btn center-center"></button>
              <button className="wall-btn bottom-center"></button>
              <Checkbox
                style={{
                  gridColumn: "5",
                  gridRow: "2",
                  marginLeft: "3px",
                  alignSelf: "center",
                }}
                {...label}
                defaultChecked
              />
            </div>
            <span className="right">Right</span>
            <span className="back">Back</span>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
