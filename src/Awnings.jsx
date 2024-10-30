import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import { color } from "three/webgpu";
import zIndex from "@mui/material/styles/zIndex";
import { Select } from "@react-three/drei";

export default function Awnings({ toggleState, onClick }) {
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
              Footings
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#004483",
                  color: "white",
                  width: "150px",
                  textTransform: "none",
                  fontWeight: "600",
                }}
              >
                <AddIcon />
                Add Left Side
              </Button>
              <DeleteIcon disabled style={{opacity : "0.6"}}/>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#004483",
                  color: "white",
                  width: "150px",
                  textTransform: "none",
                  fontWeight: "600",
                }}
              >
                <AddIcon />
                Add Right Side
              </Button>
              <DeleteIcon disabled style={{opacity : "0.6"}}/>
            </div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
