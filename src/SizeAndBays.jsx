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
import { IconButton } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';

import { color } from "three/webgpu";
import zIndex from "@mui/material/styles/zIndex";

const roofStyle = [
  {
    value: "Skillion",
    label: "Skillion",
  },
  {
    value: "Gable",
    label: "Gable End",
  },
];

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function SizeAndBays({ toggleState, onClick }) {
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
          <div
            style={{
              font: "400 14px/20px Roboto,Helvetica Neue,sans-serif",
              letterSpacing: "normal",
              color: "#000000de",
              paddingLeft: "1px",
              paddingRight: "10px"
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
              General
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
                label="Roof Type"
                defaultValue="Gable"
                style={{ width: "150px" }}
              >
                {roofStyle.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-number"
                label="Roof Angle"
                type="number"
                defaultValue={12}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{width : "200px"}}
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
                id="outlined-number1"
                label="Length"
                type="number"
                defaultValue={14000}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
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
                id="outlined-number2"
                label="Length"
                type="number"
                defaultValue={12000}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={30}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
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
                id="outlined-number3"
                label="Length"
                type="number"
                defaultValue={3600}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={16}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
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
                id="outlined-number3"
                label="Length"
                type="number"
                defaultValue={4876}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
                disabled
              />
              <Slider
                size="small"
                defaultValue={10}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "230px" }}
                disabled
              />
            </div>

            <div className="divider"></div>

            <label
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              End Walls
            </label>

            <div
              style={{
                display: "flex",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="outlined-number4"
                label="Maximum Mullion Distance"
                type="number"
                defaultValue={4000}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "400px" }}
              />
            </div>

            <div className="divider"></div>

            <label
              style={{
                color: "#004483",
                fontWeight: "600",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Bays
            </label>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Switch {...label} defaultChecked />

              <TextField
                id="outlined-number4"
                label="Maximum Bay Size"
                type="number"
                defaultValue={3500}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "130px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Button variant="contained">
                <AddIcon /> Bay
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                id="outlined-number2"
                label="Bay 1 Length"
                type="number"
                defaultValue={3500}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
              />
              <Slider
                size="small"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "120px" }}
              />
              <IconButton>
                <DeleteIcon color="error"/> 
              </IconButton>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <TextField
                id="outlined-number5"
                label="Roof Bracings"
                type="number"
                defaultValue={0}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                style={{ width: "120px" }}
                size="small"
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
             <Switch {...label} defaultChecked /> Wall Bracing Right
             <Switch {...label} defaultChecked /> Wall Bracing Left
            </div>
            
            <div className="divider"></div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
