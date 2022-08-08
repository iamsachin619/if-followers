import React, { useState } from "react";
import MediaQuery from "react-responsive";
import BottomNav from "../Components/BottomNav";
import NavbarLogged from "../Components/NavbarLogged";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";


import { InputNumber, InputGroup , Input, Whisper, Tooltip,useToaster , Notification,Placeholder} from 'rsuite';
import { useNavigate } from "react-router-dom";
export default function ProcessPage({setOrder, user, setUser}) {

  const navigation = useNavigate()
  const toaster = useToaster();
  const message = (
    <Notification type={'info'} header={'Please login!'} closable>
      <p className="text">
        Please login or SignUp to place your order
      </p>
    </Notification>
  );
  
  const [profileUrl, setProfileUrl] = useState('')
  const [serviceSelected, setServiceSelected] = useState(null);
  //amount
  const [value, setValue] = React.useState(0);
  const handleMinus = () => {
    if(parseInt(value, 10) <=0){
      return
    }
    setValue(parseInt(value, 10) - 100);
  };
  const handlePlus = () => {
    setValue(parseInt(value, 10) + 100);
  };


  const placeOrder = () => {
    setOrder({serviceSelected, value, profileUrl})
    if(user){
      navigation('/processPayment')
    }else{
      toaster.push(message)

      navigation('/login')

    }
  }

  const checkDisablity = () => {
    if(serviceSelected !==null && value!= 0 && profileUrl !==''){
      return false
    }else{
      return true
    }
  }
  return (
    <>
    
      {/* desktop nav */}
      <MediaQuery minDeviceWidth={1224}>
      <div style={{backgroundColor:'#ededed', height:'100vh' , paddingTop:'100px'}}>
        <NavbarLogged setUser={setUser}/>

        {/* inputs */}
        <div className="  mx-auto d-flex flex-column align-items-center py-5"  style={{backgroundColor:'#ffffff',maxWidth:'500px', borderRadius:'20px'}} >
          <TextField
            sx={{}}
            helperText="Enter your Profile URL / Profile ID"
            id="outlined-basic"
            placeholder="instagram.com/user"
            label="Profile URL / Profile ID"
            variant="outlined"
            className="w-100"
            style={{ maxWidth: "400px" }}
            value={profileUrl}
            onChange={e => setProfileUrl(e.target.value)}

          />
          <div className="w-100 mt-4" style={{ maxWidth: "400px" }}> 
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
                <Select
                className=""
                style={{ maxWidth: "400px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={serviceSelected}
                  label="Select Service"
                  onChange={(e) => {
                    setServiceSelected(e.target.value)
                  }}
                >
                  <MenuItem value={"Buy Followers"}>Buy Followers</MenuItem>
                  <MenuItem value={"Buy Views & Likes"}>Buy Views & Likes</MenuItem>
                  <MenuItem value={"Buy Comments"}>Buy Comments</MenuItem>
                </Select >
              </FormControl>
          </div>

          <div className="w-100 mt-4 pt-2" style={{ maxWidth: "400px" }}> 
          <Whisper trigger="focus" speaker={<Tooltip>Likes</Tooltip>}>
          <InputGroup>
            <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
            <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
            <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
          </InputGroup>
            
          </Whisper>
          </div>
          
        </div>

        {/* buttons and cost */}
        <div className=" mt-3 mx-auto d-flex flex-column align-items-center py-5"  style={{backgroundColor:'#ffffff',maxWidth:'500px', borderRadius:'20px'}} >
          
          <div className="w-100 " style={{ maxWidth: "400px" }}>
            <div className="container ">
              <h4>Costing
                <span className="price" style={{color: 'black'}}>
                  <i className="fa fa-shopping-cart" />
                  
                </span>
              </h4>
              <p><a href="#">Product</a><span className="price float-right ms-1"> $15</span> <span className="float-right">{value} x 6 = &nbsp;</span></p>
              <p><a href="#">Discount</a> <span className="price float-right"> - $5</span></p>
              
              <hr />
              <p className="total float-right mt-0">Total <span className="price" style={{color: 'black'}}><b>$30</b></span></p>
            </div>

              <button 
              className="btn-common btn w-100 my-2" 
              disabled={checkDisablity() }
              onClick={placeOrder}
              >Place Order</button>
          </div>

          
          
        </div>


        </div>
      </MediaQuery>

      {/* mobile bottom nav */}
      <MediaQuery maxDeviceWidth={1224}>
        <div>

        
      <div className="container mt-5 d-flex flex-column align-items-center " style={{backgroundColor:'#ffffff', borderRadius:'20px'}}>
          <TextField
            sx={{}}
            helperText="Enter your Profile URL / Profile ID"
            id="outlined-basic"
            placeholder="instagram.com/user"
            label="Profile URL / Profile ID"
            variant="outlined"
            className="w-100"
            style={{ maxWidth: "400px" }}
          />
          <div className="w-100 mt-4" style={{ maxWidth: "400px" }}> 
              <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Select Service</InputLabel>
                <Select
                className=""
                style={{ maxWidth: "400px" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={serviceSelected}
                  label="Select Service"
                  onChange={(e) => {
                    setServiceSelected(e.target.value)
                  }}
                >
                  <MenuItem value={"Buy Followers"}>Buy Followers</MenuItem>
                  <MenuItem value={"Buy Views & Likes"}>Buy Views & Likes</MenuItem>
                  <MenuItem value={"Buy Comments"}>Buy Comments</MenuItem>
                </Select >
              </FormControl>
          </div>

          <div className="w-100 mt-4 pt-2" style={{ maxWidth: "400px" }}> 
          
          <InputGroup>
            <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
            <InputNumber className={'custom-input-number'} value={value} onChange={setValue} />
            <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
          </InputGroup>
          <p className="text-muted">Likes</p>
          </div>
          
           {/* buttons and cost */}
        
          <div className="w-100 mt-5" style={{ maxWidth: "400px" }}>
            <div className="container ">
              <h4>Cart
                <span className="price" style={{color: 'black'}}>
                  <i className="fa fa-shopping-cart" />
                  <b>4</b>
                </span>
              </h4>
              <p><a href="#">Product</a><span className="price float-right ms-1"> $15</span> <span className="float-right">{value} x 6 = &nbsp;</span></p>
              <p><a href="#">Discount</a> <span className="price float-right"> - $5</span></p>
              
              <hr />
              <p className="total float-right mt-0">Total <span className="price" style={{color: 'black'}}><b>$30</b></span></p>
            </div>

              <button className="btn-common btn w-100 my-2 " 
              disabled={checkDisablity() }
              onClick={placeOrder}>Place Order</button>
          </div>

          
   

        </div>
        <BottomNav value={0} />
        </div>
      </MediaQuery>
    </>
  );
}
