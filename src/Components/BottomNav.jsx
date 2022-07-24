import React from 'react'


import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import { Navigate, useNavigate } from 'react-router-dom';

export default function BottomNav({value}) {
    const navigate = useNavigate()


    

  return (
    <div>
         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              sx={{
                "& .Mui-selected, .Mui-selected > svg": {
                  color: "#F63854"
                }
              }}
            >
              <BottomNavigationAction label="Main" icon={<HomeIcon />} onClick={()=>{
                navigate('/main')
              }}/>
              <BottomNavigationAction label="Orders" icon={<ListIcon />} onClick={()=>{
                console.log('here')
                navigate('/orders')
              }}/>
              <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} onClick={()=>{
                navigate('/main')
              }}/>
            </BottomNavigation>
          </Paper>
    </div>
  )
}
