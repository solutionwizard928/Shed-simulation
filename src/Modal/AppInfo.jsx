import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { Padding } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "60%",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  padding: "24px",
  overflow: "auto",
};

export default function AppInfo({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{backgroundColor : "#0006"}}
    >
      <div>
        <Box sx={style}>
          <div>
            <div style={{ display: "flex", flexDirection : "column", alignItems : "center" }}>
              <svg width="150" height="150" display="block">
                <path
                  transform="translate(14.9981510637773, -0.132566179877593)"
                  fill="#008aff"
                  d="M0 45.1819L78.5528 0L127.297 27.9341L48.8846 73.116Z"
                ></path>
                <path
                  transform="matrix(1.00000000081501 0 0 1.00000000081501 15.4434106143847 44.5257613292416)"
                  fill="#004482"
                  d="M0.0234328 0L48.6971 28.0512L48.7088 104.753L0 76.3265Z"
                ></path>
              </svg>
              <div style={{marginTop : "20px"}}>Shedmate: Shed Designer</div>
              <div>Shedmate Pty Ltd</div>
              
            </div>

            <div className="divider"></div>

            <div style={{marginTop : "20px", marginBottom : "10px"}}>Version : 24.10.29.0.0</div>
            <div className="divider"></div>
            <div>Released By: Agata Baltyn</div>
            <div className="divider"></div>
            <div>Released At: 10/29/2024, 2:05:02 PM</div>
            <div className="divider"></div>
            <div>Internal Version: 800ac98f100187660849176199742fe62aee3222</div>
            <div className="divider"></div>
            <div>Contact : shedmate@shedmate.com.nz</div>
          </div>
        </Box>
      </div>
    </Modal>
  );
}
