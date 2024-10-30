import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import shed1 from "../assets/warehouse_images/started_shed.jpg";
import shed2 from "../assets/warehouse_images/hay-shed.jpg";
import shed3 from "../assets/warehouse_images/machinery-shed.jpg";
import shed4 from "../assets/warehouse_images/domestic-rollerdoors.jpg";
import shed5 from "../assets/warehouse_images/domestic-rollerdoors.jpg";
import shed6 from "../assets/warehouse_images/garaport.jpg";
import shed7 from "../assets/warehouse_images/office-shed.jpg";
import shed8 from "../assets/warehouse_images/solid-shed.jpg";
import shed9 from "../assets/warehouse_images/carport.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: "70%",
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  outline: "none",
  padding: "24px",
  overflow: "auto",
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ShedModal({ newShed, open, handleClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderBottom: "1px solid #ddd",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                style={{ width: "320px" }}
              >
                <Tab label="New" {...a11yProps(0)} style={{ width: "160px" }} />
                <Tab
                  label="Open"
                  {...a11yProps(1)}
                  style={{ width: "160px" }}
                />
              </Tabs>
            </div>
          </div>
          <CustomTabPanel value={value} index={0}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "30px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Started Kit
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed1} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A simple shed to start with.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "30px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Truss Over Shed
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed1} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A simple shed with truss over rafters.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "30px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Hay Shed
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed2} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A cold formed cost-effective cold rolled steel shed to store
                    hays in rural areas.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "30px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Machinery Shed
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed3} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    An industrial style cold formed shed with sliding panels for
                    maximum spacing utilisation.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "15px",
                      marginTop: "10px",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    New Domestic Shed with Rollerdoors
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed4} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A small and cost effective colorbond domestic shed with
                    roller doors and a personal access door.
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      fontWeight: "700",
                      marginBottom: "15px",
                      fontSize: "18px",
                    }}
                  >
                    New Domestic Shed with Sliding Doors
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed5} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A medium size colorbond domestic shed with sliding panels
                    and a personal access door.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Garaport
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed6} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A shed with a varandah and rollerdoors at the front, enough
                    room to park 2 vehicles inside.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Office Shed
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed7} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A long shed with a internal wall division separating an
                    office area from a enclosed garage.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Soild Shed
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed8} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    A simple shed with solid steel structure.
                  </div>
                </CardContent>
              </Card>

              <Card
                sx={{
                  width: "19%",
                  minHeight: "40%",
                }}
                style={{ boxShadow: "none", backgroundColor: "#f6f6f6" }}
                id="card-body"
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                      marginBottom: "20px",
                      marginTop: "20px",
                      fontSize: "18px",
                    }}
                  >
                    New Carport
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    14000(l)*12000(w)*3600(h)
                  </div>
                  <div style={{ marginLeft: "0px", marginRight: "0px" }}>
                    <img src={shed9} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      textAlign: "center",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    An open shed designed to serve as Carport.
                  </div>
                </CardContent>
              </Card>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              No Sheds saved locally
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </Modal>
  );
}
