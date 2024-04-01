import React from "react";

export default function GeneralInformationTourModal({ infoVoucher }) {
  return (
    infoVoucher && (
        <div dangerouslySetInnerHTML={{__html: infoVoucher}}/>
    )
  );
}
