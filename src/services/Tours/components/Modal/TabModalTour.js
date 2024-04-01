import * as React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import { useTourContext } from "../../Context/ListingTourContext";
import { ReactComponent as IconInfo } from "../../../assets/icons/tour/listing/exclamation-mark-inactive.svg";

export default function TabModalTour() {
  const [value, setValue] = React.useState("1");
  const { tourInfo } = useTourContext();

  // console.log(tourInfo);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }} className="tab-info-tour">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              className="tab-tour-modal"
              icon={<IconInfo className="icon-tab-tour" />}
              iconPosition="start"
              label="Informacion general"
              value="1"
            />
            <Tab className="tab-tour-modal" label="Item Two" value="2" />
            <Tab className="tab-tour-modal" label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {tourInfo && (
            <div dangerouslySetInnerHTML={{ __html: tourInfo.infoVoucher }} />
          )}
        </TabPanel>

        <TabPanel value="2">help</TabPanel>
        <TabPanel value="3">help me</TabPanel>
      </TabContext>
    </Box>
  );
}
