import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function valuetext(value) {
  return `${value}m`;
}

export default function Structure({ toggleState, onClick }) {
  const [footingState, setFootingState] = React.useState("circle");

  const handleFooting = (event) => {
    setFootingState(event.target.value);
  };

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
            <div style={{ marginTop: "30px", marginBottom : "40px" }}>
              <TextField
                labelId="demo-simple-select-label"
                id="footing_selection"
                value={footingState}
                select
                label="Footing option"
                onChange={handleFooting}
                fullWidth
                variant="filled"
                slotProps={{
                  select: {
                    native: true,
                  },
                }}
              >
                <option value="circle">Circle</option>
                <option value="square">Square</option>
              </TextField>
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
