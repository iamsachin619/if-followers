import React, { useState } from "react";
import MediaQuery from "react-responsive";
import BottomNav from "../Components/BottomNav";
import NavbarLogged from "../Components/NavbarLogged";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from '@mui/material/Box';

export default function ProcessPage() {
  const [serviceSelected, setServiceSelected] = useState(null);
  return (
    <div>
      {/* desktop nav */}
      <MediaQuery minDeviceWidth={1224}>
        <NavbarLogged />
      </MediaQuery>

      {/* mobile bottom nav */}
      <MediaQuery maxDeviceWidth={1224}>
        <div className="container mt-5 d-flex flex-column align-items-center">
          <TextField
            
              sx={{
              
            }}
            helperText="Enter your Profile URL / Profile ID"
            id="outlined-basic"
            placeholder="instagram.com/user"
            label="Profile URL / Profile ID"
            variant="outlined"
            className="w-100"
            style={{ maxWidth: "300px" }}
          />

        

        
        </div>
        <BottomNav value={0} />
      </MediaQuery>
    </div>
  );
}
