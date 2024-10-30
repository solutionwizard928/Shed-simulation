import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 390,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  padding: "24px",
  overflow: "auto",
};

export default function FlashingEditor({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{ backgroundColor: "#0006" }}
    >
      <div>
        <Box sx={style}>
          <div
            style={{
              maxHeight: 600,
              overflow: "auto",
              paddingLeft: "22px",
              paddingRight: "22px",
              margin: "0 -24px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                style={{
                  color: "grey",
                  height: "35px",
                  alignSelf: "center",
                }}
              >
                <AddIcon />
              </Button>

              <SaveIcon
                style={{
                  alignSelf: "center",
                  opacity: "0.5",
                  marginRight: "5px",
                }}
                disabled
              />

              <TextField
                id="filled-select-currency"
                select
                defaultValue="default"
                variant="filled"
              >
                <MenuItem value={"default"}>Select Settings Preset</MenuItem>
              </TextField>
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="FL1"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Raker Flashings"
                defaultValue="FL2"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Gutter Flashings"
                defaultValue="FL3"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Internal Wall Flashings"
                defaultValue="FL4"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="PA Door Header Flashings"
                defaultValue="FL5"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Window Header Flashings"
                defaultValue="FL5"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Glass Door Header Flashings"
                defaultValue="FL5"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Window Side Flashings"
                defaultValue="FL6"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Box Gutter Flashings"
                defaultValue="FL7"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Ridge Caps"
                defaultValue="FL8"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Sliding Panel Header Flashings"
                defaultValue="FL9"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Wall Corner Flashings"
                defaultValue="FL11"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Opened Wall Corner Flashings"
                defaultValue="FL12"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Rollerdoor Corner Flashings"
                defaultValue="FL13"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Rollerdoor Header Flashings"
                defaultValue="FL14"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Sliding Panel Side Flashings"
                defaultValue="FL15"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Sliding Panel Wall Wrapping Flashings"
                defaultValue="FL16"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <TextField
                required
                id="standard-required"
                label="Sliding Panel Column Wrapping Flashings"
                defaultValue="FL16"
                variant="filled"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              style={{
                backgroundColor: "#004483",
                color: "white",
                boxShadow:
                  "0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)",
                marginRight: "10px",
              }}
            >
              Apply
            </Button>
            <Button
              style={{
                color: "black",
                boxShadow:
                  "0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12)",
              }}
            >
              Close
            </Button>
          </div>
        </Box>
      </div>
    </Modal>
  );
}
