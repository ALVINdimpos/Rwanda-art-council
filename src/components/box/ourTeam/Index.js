import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BoardTeam from '../ourTeam/BoardTeam/Index'
import ExcutiveTeam from '../ourTeam/ExcutiveTeam/Index'
import './style.css'
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'white', marginTop:'1rem', textAlign:'center' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example"  centered>
            <Tab label="Board team" value="1" />
            <Tab label="Excutive team" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className='team'><BoardTeam /></TabPanel>
        <TabPanel value="2" className='team'><ExcutiveTeam/></TabPanel>
       
      </TabContext>
    </Box>
  );
}
