import * as React from 'react';
import NavBar from "../NavBar/Index";
import PageIndicator from "../PageIndicator/Index";
import Footer from "../Footer/Footer";
import All from "../Gallery/Allphoto/Index"
import Painting from "../Gallery/Painting/Index"
import Sculpture from "../Gallery/Sculpture/Index"
import Literature from "../Gallery/Literature/Index"
import Architecture from "../Gallery/Architecture/Index"
import Cinema from "../Gallery/Cinema/Index"
import Music from "../Gallery/Allphoto/Index"
import Theater from "../Gallery/Theater/Index"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <NavBar/>
    <PageIndicator name="Gallery"/>
    <Box sx={{ width: '100%', typography: 'body1' ,backgroundColor:'whitesmoke' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',marginTop:'1rem' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="All" value="1" />
            <Tab label="Painting" value="2" />
            <Tab label="Sculpture" value="3" />
            <Tab label="Literature" value="4" />
            <Tab label="Architecture" value="5" />
            <Tab label="Cinema" value="6" />
            <Tab label="Music" value="7" />
            <Tab label="Theater" value="8" />
          </TabList>
        </Box>
        <TabPanel value="1"><All/></TabPanel>
        <TabPanel value="2"><Painting/></TabPanel>
        <TabPanel value="3"><Sculpture/></TabPanel>
        <TabPanel value="4"><Literature/></TabPanel>
        <TabPanel value="5"><Architecture/></TabPanel>
        <TabPanel value="6"><Cinema/></TabPanel>
        <TabPanel value="7"><Music/></TabPanel>
        <TabPanel value="8"><Theater/></TabPanel>
      </TabContext>
    </Box>
    <Footer/>
    </>
  );
}
