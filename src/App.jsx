import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Sky, useGLTF, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ground } from "./Ground";

import AddBoxIcon from "@mui/icons-material/AddBox";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StraightenIcon from "@mui/icons-material/Straighten";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import WbShadeIcon from "@mui/icons-material/WbShade";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InfoIcon from "@mui/icons-material/Info";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@material-ui/core/Button";
import ArrowRight from "@mui/icons-material/ArrowRight";

import SizeAndBays from "./SizeAndBays";
import WallAndSlabs from "./WallAndSlabs";
import ColoursAndStyle from "./ColoursAndStyle";

import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";
import Structure from "./Structure";
import Awnings from "./Awnings";
import Engineering from "./Engineering";
import Visibility from "./Visibility";
import Settings from "./Settings";
import FlashingEditor from "./Modal/FlashingEditor";
import AppInfo from "./Modal/AppInfo";

import ShedModal from "./Modal/ShedModal";

export const App = () => {
  const [newshed, setNewShed] = useState(false);
  const [openshed, setOpenShed] = useState(false);
  const [sizeandbars, setSizeAndBars] = useState(false);
  const [wallandslabs, setWallAndSlabs] = useState(false);
  const [coloursandstyle, setColoursAndStyle] = useState(false);
  const [structure, setStructure] = useState(false);
  const [awnings, setAwnings] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [settings, setSettings] = useState(false);

  const [flasheditor, setFlashEditor] = useState(false);
  const [appinfo, setAppInfo] = useState(false);

  const [tagAnchorEl, setTagAnchorEl] = React.useState(null);

  const openTag = Boolean(tagAnchorEl);

  const handleTag = (event) => {
    setTagAnchorEl(event.currentTarget);
  };

  function Warehouse({ path, props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(path);

    // useLayoutEffect(() => {
    //   const box = new THREE.Box3().setFromObject(group.current);
    //   const height = box.max.y - box.min.y; // Get the height of the model
    //   console.log("Warehouse height:", height); // You can adjust the camera based on this
    //   if (group.current) {
    //     group.current.traverse((object) => {
    //       if (object.isMesh) {
    //         // Log the object and material to check what is being traversed
    //         console.log("Object:", object);
    //         console.log("Material:", object.material);

    //         // Check if the material has a color property
    //         if (object.material && object.material.color) {
    //           // Set the color to red
    //           object.material.color.set(0xff0000); // Red color
    //           console.log("Color changed to red");
    //         } else {
    //           console.log("Material does not support color change.");
    //         }
    //       }
    //     });
    //   }
    // }, []);

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_B.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_F.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_L.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_R.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vertical_Supports.geometry}
          material={materials.Steel}
          position={[500, 250, -300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Horizontal_Supports.geometry}
          material={materials.Steel}
          position={[495.979, 486.905, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[100, 100, 55.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Roof_Support_(Main)"].geometry}
          material={materials.Steel}
          position={[0, 643.698, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.5, 750, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Strut_B.geometry}
          material={materials.Steel}
          position={[0, 492.369, -300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[500, 7.5, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Strut_F.geometry}
          material={materials.Steel}
          position={[0, 492.369, 300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[500, 7.5, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof.geometry}
          material={materials.Roof}
          position={[0, 501, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[515, 771.652, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, -0.252, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[102.84, 101.853, 102.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Bit.geometry}
          material={materials.Roof}
          position={[-37.458, 200, 760.436]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[5, 300, 200]}
        />
        <group
          position={[300, 156.177, 741.69]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[3.713, 3.713, 1.183]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Up}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Down}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_3.geometry}
            material={materials.Stop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_4.geometry}
            material={materials.Top}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Bit.geometry}
          material={materials.Roof}
          position={[-37.458, 375.709, 734.535]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[25, 300, 25]}
        />
        <group
          position={[399.972, 109.574, 757.314]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[5, 50.748, 110]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials.Metal_Shiny}
          />
        </group>
        <group
          position={[399.972, 109.574, -758.881]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[5, 50.748, 110]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.Metal_Shiny}
          />
        </group>
        <group
          position={[-302.554, 556.732, 0.11]}
          rotation={[-Math.PI / 2, -0.269, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[-288.984, 546.751, -502.36]}
          rotation={[Math.PI, 0, 1.302]}
          scale={[10, 10, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[-302.554, 556.732, 525.069]}
          rotation={[-Math.PI / 2, -0.269, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, 525.069]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, -6.386]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, -501.105]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.Emissive}
          />
        </group>
      </group>
    );
  }

  useGLTF.preload("/warehouse.gltf");

  const handleSizeAndBays = (open) => {
    if (sizeandbars == true) {
      setSizeAndBars(false);
      return;
    }
    initalAllMenuState();
    setSizeAndBars(open);
  };

  const handleWallandSlabs = (open) => {
    if (wallandslabs == true) {
      setWallAndSlabs(false);
      return;
    }
    initalAllMenuState();
    setWallAndSlabs(open);
  };

  const handleColoursAndStyle = (open) => {
    if (coloursandstyle == true) {
      setColoursAndStyle(false);
      return;
    }
    initalAllMenuState();
    setColoursAndStyle(open);
  };

  const handleStructure = (open) => {
    if (structure == true) {
      setStructure(false);
      return;
    }
    initalAllMenuState();
    setStructure(open);
  };

  const handleAwnings = (open) => {
    if (awnings == true) {
      setAwnings(false);
      return;
    }
    initalAllMenuState();
    setAwnings(open);
  };

  const handleEngineering = (open) => {
    if (engineering == true) {
      setEngineering(false);
      return;
    }
    initalAllMenuState();
    setEngineering(open);
  };

  const handleVisibility = (open) => {
    if (visibility == true) {
      setVisibility(false);
      return;
    }
    initalAllMenuState();
    setVisibility(open);
  };

  const handleSettings = (open) => {
    if (settings == true) {
      setSettings(false);
      return;
    }
    initalAllMenuState();
    setSettings(open);
  };

  const handleFlashingEditor = (open) => {
    setFlashEditor(open);
  };

  const handleAppInfo = (open) => {
    setAppInfo(open);
  };

  const handleNewShed = (open) => {
    setNewShed(open);
  };

  const handleOpenShed = (open) => {
    setOpenShed(open);
  };

  const initalAllMenuState = () => {
    setSizeAndBars(false);
    setWallAndSlabs(false);
    setColoursAndStyle(false);
    setStructure(false);
    setAwnings(false);
    setEngineering(false);
    setVisibility(false);
    setSettings(false);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        className="w-[64px] h-full fixed top-0 left-0 overflow-x-hidden py-[6px] leading-[0.9rem] text-[#757575] text-[0.7rem]"
        style={{
          fontWeight: "lighter",
          backgroundColor: "#f4f4f4",
          zIndex: "1300",
        }}
      >
        <div
          className="py-[6px]"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloudOffIcon style={{ opacity: "0.6" }} />
        </div>
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleNewShed(true)}
        >
          <AddBoxIcon />
          <div>
            New <br /> Shed
          </div>
        </div>

        <ShedModal open={newshed} handleClose={() => setNewShed(false)} />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleOpenShed(true)}
        >
          <FolderOpenIcon />
          <div>
            Open <br /> Shed
          </div>
        </div>

        <ShedModal open={openshed} handleClose={() => setOpenShed(false)} />

        <div
          style={{ margin: "10px 5px", height: "1px", backgroundColor: "#aaa" }}
        ></div>

        <Dropdown
          trigger={
            <Button id="dropdown-btn">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#757575",
                }}
                onClick={handleTag}
              >
                <LocalOfferIcon />
                <div>Tag</div>
              </div>
            </Button>
          }
          menu={[
            <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
              Description
            </DropdownMenuItem>,
            <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
              Elevation
            </DropdownMenuItem>,
            <DropdownNestedMenuItem
              label="Delete All"
              style={{ fontSize: "0.9rem" }}
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: "#f44336",
                    color: "white",
                  }}
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Confirm Delete
                </DropdownMenuItem>,
              ]}
            />,
            <DropdownNestedMenuItem
              label="Delete Last"
              style={{ fontSize: "0.9rem" }}
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  style={{
                    fontSize: "0.9rem",
                    backgroundColor: "#f44336",
                    color: "white",
                  }}
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Confirm Delete
                </DropdownMenuItem>,
              ]}
            />,
          ]}
        />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleSizeAndBays(true)}
        >
          <StraightenIcon />
          <div>
            Size &<br /> Bays
          </div>
        </div>
        <SizeAndBays
          toggleState={sizeandbars}
          onClick={() => setSizeAndBars(false)}
        />
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleWallandSlabs(true)}
        >
          <ViewAgendaIcon />
          <div>
            Walls &<br /> Slabs
          </div>
        </div>
        <WallAndSlabs
          toggleState={wallandslabs}
          onClick={() => setWallAndSlabs(false)}
        />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Dropdown
              trigger={
                <Button id="dropdown-btn">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "#757575",
                    }}
                  >
                    <DoorSlidingIcon />
                    Add things
                  </div>
                </Button>
              }
              menu={[
                <DropdownNestedMenuItem
                  label="On Walls"
                  style={{ fontSize: "0.9rem" }}
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      PA Door
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Glass Door
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Roller Door
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Sliding Panel
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Window
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Bay Opening
                    </DropdownMenuItem>,
                  ]}
                />,
                <DropdownNestedMenuItem
                  label="On Roofs"
                  style={{ fontSize: "0.9rem" }}
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      Spin Away
                    </DropdownMenuItem>,
                  ]}
                />,
                <DropdownNestedMenuItem
                  label="On Shed"
                  style={{ fontSize: "0.9rem" }}
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem
                      style={{ fontSize: "0.9rem" }}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      Skylight
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Down Pipe
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Internal Wall
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Bracings
                    </DropdownMenuItem>,
                    <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                      Appron
                    </DropdownMenuItem>,
                  ]}
                />,
                <DropdownMenuItem style={{ fontSize: "0.9rem" }}>
                  Insulation...
                </DropdownMenuItem>,
              ]}
            />
          </div>
        </div>
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleColoursAndStyle(true)}
        >
          <FormatPaintIcon />
          <div>
            Colours
            <br />& Style
          </div>
        </div>
        <ColoursAndStyle
          toggleState={coloursandstyle}
          onClick={() => setColoursAndStyle(false)}
        />
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleStructure(true)}
        >
          <BuildIcon />
          <div>Structure</div>
        </div>

        <Structure
          toggleState={structure}
          onClick={() => setStructure(false)}
        />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleAwnings(true)}
        >
          <WbShadeIcon />
          <div>Awnings</div>
        </div>

        <Awnings toggleState={awnings} onClick={() => setAwnings(false)} />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleEngineering(true)}
        >
          <EngineeringIcon />
          <div>Engineering</div>
        </div>

        <Engineering
          toggleState={engineering}
          onClick={() => setEngineering(false)}
        />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleVisibility(true)}
        >
          <VisibilityIcon />
          <div>Visibility</div>
        </div>

        <Visibility
          toggleState={visibility}
          onClick={() => setVisibility(false)}
        />

        <div
          style={{ margin: "10px 5px", height: "1px", backgroundColor: "#aaa" }}
        ></div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleSettings(true)}
        >
          <SettingsIcon />
          <div>Setting</div>
        </div>

        <Settings toggleState={settings} onClick={() => setSettings(false)} />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionIcon />
          <div>Description</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentCopyIcon />
          <div>Copy Shed</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentPasteIcon />
          <div>Paste Shed</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleFlashingEditor(true)}
        >
          <EditNoteIcon />
          <div>
            Flashing <br /> Editor
          </div>
        </div>

        <FlashingEditor
          open={flasheditor}
          handleClose={() => setFlashEditor(false)}
        />

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleAppInfo(true)}
        >
          <InfoIcon />
          <div>App Info</div>
        </div>

        <AppInfo open={appinfo} handleClose={() => setAppInfo(false)} />
      </div>
      <div className="ml-[64px] h-full">
        <Canvas
          shadows
          camera={{ position: [1.3, 0, 1.8], fov: 35, zoom: 0.9 }}
        >
          <hemisphereLight intensity={1.5} color="white" groundColor="black" />
          <Sky sunPosition={[100, 80, 100]} />
          <ambientLight intensity={1.5} />
          <pointLight castShadow intensity={1.5} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, 0, 0]} />
            <group position={[0, 0, 0]} scale={[0.00085, 0.0006, 0.0008]}>
              <Warehouse path="/warehouse.gltf" />
            </group>
          </Physics>
          <OrbitControls
            minDistance={0.56}
            maxDistance={5}
            autoRotateSpeed={0.85}
            zoomSpeed={0.75}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Canvas>
      </div>
    </div>
  );
};
