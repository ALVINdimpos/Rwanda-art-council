import * as React from "react";
import NavBar from "../components/NavBar/Index";
import PageIndicator from "../components/PageIndicator/Index";
import Footer from "../components/Footer/Footer";
import All from "../components/Gallery/Allphoto/Index";
import Painting from "../components/Gallery/Beauty & fashion/Index";
import Sculpture from "../components/Gallery/Book industry/Index";
import Literature from "../components/Gallery/Performing/Index";
import Architecture from "../components/Gallery/Traditional dance/Index";
import Cinema from "../components/Gallery/Cinema/Index";
import Music from "../components/Gallery/Music/Index";
import Theater from "../components/Gallery/Plastic/Index";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <PageIndicator name="Gallery" />
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          backgroundColor: "whitesmoke",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", marginTop: "1rem" }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="All" value="1" />
              <Tab label="Beauty & fashion" value="2" />
              <Tab label="Book industry" value="3" />
              <Tab label="Performing" value="4" />
              <Tab label="Plastic" value="5" />
              <Tab label="Cinema" value="6" />
              <Tab label="Music" value="7" />
              <Tab label="Traditional dance" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <All />
          </TabPanel>
          <TabPanel value="2">
            <Painting />
          </TabPanel>
          <TabPanel value="3">
            <Sculpture />
          </TabPanel>
          <TabPanel value="4">
            <Literature />
          </TabPanel>
          <TabPanel value="5">
            <Architecture />
          </TabPanel>
          <TabPanel value="6">
            <Cinema />
          </TabPanel>
          <TabPanel value="7">
            <Music />
          </TabPanel>
          <TabPanel value="8">
            <Theater />
          </TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </>
  );
}
