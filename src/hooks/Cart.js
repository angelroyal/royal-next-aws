"use client";

import "../assets/styles/web/Cart.css";
import "../assets/styles/mobile/CartMobile.css";

import React, { useState, useEffect, useContext } from "react";
import { Box, Menu, Tooltip, IconButton } from "@mui/material";

import CartGet from "../components/Cart/CartGet";
import CartCanvasM from "../components/Cart/CartCanvasM";
import LanguageContext from "../language/LanguageContext";
// import { useCartAxios } from "../components/Cart/CartAxios";
import { useIsMobile } from "../config/Mobile/isMobile";

import IconCart from "../assets/icons/utils/payment/cart.svg";
import IconCartActive from "../assets/icons/utils/payment/cart-active.svg";
import { useCartAxios } from "@/components/Cart/CartAxios";
import Image from "next/image";

export default function Cart() {
  const { fetchData, totalItemsInCart } = useCartAxios();
  const isMobile = useIsMobile();

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const [cartUid, setCartUid] = useState(null);
  const { languageData } = useContext(LanguageContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl((prev) => (prev ? null : event.currentTarget));
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    if (cartUid) {
      fetchData(cartUid);
    }
  };

  // OBTAIN UID CART
  useEffect(() => {
    handleUid();
  }, []);

  const handleUid = () => {
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      setCartUid(uid);
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Cart">
          <IconButton
            className="m-icon-card"
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={anchorEl ? "cart-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl).toString()}
          >
            {totalItemsInCart ? (
              <div className="cart-active">
                {/* <IconCartActive sx={{ width: 34, height: 34 }} /> */}
                <Image src={IconCartActive} width={26} height={26} />
                <div className="cart-orange-num">{totalItemsInCart}</div>
              </div>
            ) : (
              // <IconCart sx={{ width: 34, height: 34 }} />
              <Image src={IconCart} width={26} height={26} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {isMobile ? (
        <CartCanvasM
          showOffcanvas={showOffcanvas}
          setShowOffcanvas={setShowOffcanvas}
          cartUid={cartUid}
        />
      ) : (
        <>
          {anchorEl && (
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu} // Close the menu when clicking outside of it
              PaperProps={{
                elevation: 0,
                sx: {
                  className: "custom-menu",
                  width: "24rem",
                  position: "absolute",
                  marginLeft: "23px",
                  left: "67.5rem",
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 8.5,
                  ml: 6,
                  borderRadius: "10px",
                  "& .MuiAvatar-root": {
                    width: 550,
                    height: 100,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: -10,
                    right: "30px",
                    backgroundColor: "#fff",
                    zIndex: 0,
                    width: "30px",
                    height: "30px",
                    transform: "rotate(45deg) skew(15deg, 15deg)",
                    borderRadius: "2px",
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <div className="p-2">
                <div style={{ position: "relative", margin: "10px 0px" }}>
                  <h1 className="title-reservation-cart">
                    {languageData.cart.titleBooking}
                  </h1>
                </div>
                <CartGet onCloseMenu={handleCloseMenu}/>
              </div>
            </Menu>
          )}
        </>
      )}
    </React.Fragment>
  );
}
