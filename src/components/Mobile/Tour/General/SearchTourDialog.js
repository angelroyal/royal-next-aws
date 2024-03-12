import React, { Suspense, lazy } from "react";
import { Dialog, Slide } from "@mui/material";

import { ReactComponent as CloseIcon } from "../../../../assets/icons/hotel/modal/close_active.svg";
import { ReactComponent as RoomOutlinedIcon } from "../../../../assets/icons/utils/searchBox/location-autocomplete.svg";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SearchTour = lazy(() => import("../../../Search/SearchTour"));

export default function SearchTourDialog(props) {
  const { open, closeDialog, onSelectTour } = props;
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
            <CloseIcon onClick={() => closeDialog(false)} />
          </div>

          {/* INPUT SEARCH TOUR */}
          <div className="m-input-search-hotel d-flex align-items-center justify-content-center">
            <RoomOutlinedIcon className="icon-location-home-dialog" />
            <Suspense fallback={null}>
              <SearchTour closeDialog={() => closeDialog(false)} onSelectTour={onSelectTour} />
            </Suspense>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
