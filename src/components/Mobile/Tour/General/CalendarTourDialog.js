import { Dialog, Slide } from "@mui/material";
import React, { Suspense, lazy } from "react";

import { ReactComponent as CloseIcon } from "../../../../assets/icons/hotel/modal/close_active.svg";
import { ReactComponent as RoomOutlinedIcon } from "../../../../assets/icons/utils/searchBox/location-autocomplete.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CalendarDayMobile = lazy(() =>
  import("../../../../hooks/CalendarDayMobile")
);

export function CalendarTourDialog(props) {
  const { open, closeDialog } = props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description container"
    >
      <div className="m-component-info-search dialog-container">
        <div className="height100 ps-4 pt-4 pe-4">
          <div className="d-flex width100 justify-content-end">
            <CloseIcon onClick={() => closeDialog()} />
          </div>

          <div className="m-input-search-hotel d-flex align-items-center justify-content-center">
            <RoomOutlinedIcon className="icon-location-home-dialog" />
            <>dia</>
          </div>
          
          {/* CALENDAR TOUR */}
          <Suspense fallback={null}>
            <CalendarDayMobile></CalendarDayMobile>
          </Suspense>
        </div>
      </div>
    </Dialog>
  );
}
