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

const roofStyle = [
  {
    value: "c_75_95",
    label: "C:75-12",
  },
  {
    value: "c_75_95",
    label: "C:75-12",
  },
  {
    value: "c_75_15",
    label: "C:75-15",
  },
  {
    value: "c_100_10",
    label: "C:100-10",
  },
  {
    value: "c_100_12",
    label: "C:100-12",
  },
  {
    value: "c_100_15",
    label: "C:100-15",
  },
  {
    value: "c_100_19",
    label: "C:100-19",
  },
  {
    value: "c_100_24",
    label: "C:100-24",
  },
  {
    value: "c_150_10",
    label: "C:150-10",
  },
  {
    value: "c_150_12",
    label: "C:150-12",
  },
  {
    value: "c_150_15",
    label: "C:150-15",
  },
  {
    value: "c_150_19",
    label: "C:150-19",
  },
  {
    value: "c_150_24",
    label: "C:150-24",
  },
  {
    value: "c_200_12",
    label: "C:200-12",
  },
  {
    value: "c_200_15",
    label: "C:200-15",
  },
  {
    value: "c_200_19",
    label: "C:200-19",
  },
  {
    value: "c_200_24",
    label: "C:200-24",
  },
  {
    value: "c_250_15",
    label: "C:250-15",
  },
  {
    value: "c_250_19",
    label: "C:250-19",
  },
  {
    value: "c_250_24",
    label: "C:250-24",
  },
  {
    value: "c_250_30",
    label: "C:250-30",
  },
  {
    value: "c_300_24",
    label: "C:300-24",
  },
  {
    value: "c_300_30",
    label: "C:300-30",
  },
  {
    value: "c_350_24",
    label: "C:350-24",
  },
  {
    value: "c_350_30",
    label: "C:350-30",
  },
  {
    value: "c_350_30",
    label: "C:350-30",
  },
];

const label = { inputProps: { "aria-label": "Switch demo" } };

function valuetext(value) {
  return `${value}m`;
}

export default function Structure({ toggleState, onClick }) {
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
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="column_footing_dia"
                label="Column Footing Dia"
                type="number"
                defaultValue={600}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={0.6}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
                getAriaValueText={valuetext}
                max={2}
                step={0.01}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="column_footing_dia"
                label="Column Footing De"
                type="number"
                defaultValue={800}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={0.8}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
                getAriaValueText={valuetext}
                max={4}
                step={0.01}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="column_footing_dia"
                label="Mullion Footing De"
                type="number"
                defaultValue={450}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={0.45}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
                getAriaValueText={valuetext}
                max={4}
                step={0.01}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="column_footing_dia"
                label="Mullion Footing De"
                type="number"
                defaultValue={600}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={0.6}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
                getAriaValueText={valuetext}
                max={4}
                step={0.01}
              />
            </div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
