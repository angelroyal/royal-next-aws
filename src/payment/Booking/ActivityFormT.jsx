"use client";

import { useEffect, useState, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "../context/PaymentContext";

export const ActivityFormT = ({ activityPreBooking }) => {
  const { setFormActivityItems } = useContext(PaymentContext);
  const { languageData } = useContext(LanguageContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialFormData = {};
    activityPreBooking.forEach((activity, activityIndex) => {
      initialFormData[activityIndex] = {
        booking: activity.details.booking.map((item) => ({
          id: item.id,
          value: "",
          required: item.required,
        })),
        passengers: activity.details.passengers
          ? activity.details.passengers.map((group) =>
              group.map((passenger) => ({
                id: passenger.id,
                value: "",
                required: passenger.required,
              }))
            )
          : [],
      };
    });
    setFormData(initialFormData);
  }, [activityPreBooking]);

  useEffect(() => {
    validateAndSetFormData();
  }, [formData]);

  const handleInputChange = (
    e,
    activityIndex,
    itemType,
    groupIndex,
    itemIndex,
    id,
    isRequired,
    label
  ) => {
    let newValue = e.target.value;

    if (e.target.tagName === "SELECT" && label === "Only hand bags?") {
      newValue = e.target.value === "true";
    }

    const updatedItem = { id, value: newValue, required: isRequired };
    const updatedFormData = { ...formData };
    updatedFormData[activityIndex] = updatedFormData[activityIndex] || {};
    updatedFormData[activityIndex][itemType] =
      updatedFormData[activityIndex][itemType] || [];

    if (itemType === "passengers") {
      updatedFormData[activityIndex][itemType][groupIndex] =
        updatedFormData[activityIndex][itemType][groupIndex] || [];
      updatedFormData[activityIndex][itemType][groupIndex][itemIndex] =
        updatedItem;
    } else {
      updatedFormData[activityIndex][itemType][itemIndex] = updatedItem;
    }

    setFormData(updatedFormData);
  };

  const validateAndSetFormData = () => {
    let allRequiredFieldsFilled = true;
    const filteredFormData = [];

    Object.entries(formData).forEach(([activityIndex, activity]) => {
      const activityType = activityPreBooking[activityIndex].type;
      const activityData = {
        type: activityType,
        id: activityPreBooking[activityIndex].id,
        details: {
          booking: [],
          passengers: [],
        },
      };

      if (activity.booking) {
        activityData.details.booking = activity.booking.map((item) => ({
          id: item.id,
          value: item.value,
        }));
      }

      if (activity.passengers) {
        activity.passengers.forEach((group) => {
          group.forEach((item) => {
            if (item.required && (!item.value || item.value === "")) {
              allRequiredFieldsFilled = false;
            }
            activityData.details.passengers.push({
              id: item.id,
              value: item.value,
            });
          });
        });
      }

      filteredFormData.push(activityData);
    });

    if (allRequiredFieldsFilled) {
      setFormActivityItems(filteredFormData);
    }

    return allRequiredFieldsFilled;
  };

  return (
    <div className="py-[32px] px-[24px] w-full rounded-[19px] bg-white mt-10">
      <h2 className="m-b text-fs-21 text-black">
        {languageData.paymentActivities.activities}
      </h2>

      {activityPreBooking.map((activity, activityIndex) => (
        <div key={activity.id}>
          <div className="mt-[16px] m-b text-fs-12 mb-1 flex">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-o.svg`}
              alt="icon tour orange"
              width={20}
              height={17}
              className="ml-[.25rem] mr-[.5rem] w-[20px] h-[17px]"
            />
            {activity.name}
          </div>

          <div className="p-[1.3rem] mb-3 bg-gry-30 rounded-[9px]">
            {activity.details.booking.map((bookingItem, bookingIndex) => (
              <div key={bookingItem.id}>
                <label className="flex gap-1">
                  <p className="m-s-b text-fs-14 m-0">{bookingItem.label}</p>
                  {bookingItem.required && (
                    <span className="text-red-100">*</span>
                  )}
                </label>

                {bookingItem.label === "Only hand bags?" ? (
                  <select
                    className="block w-full py-[0.375rem] px-[0.75rem] text-fs-16 leading-[1.5] appearance-none rounded-[.375rem] m-m mb-2 focus:outline-none focus:border focus:border-[#7EC2DD] focus:shadow-3xl focus:shadow-[#7EC2DD]"
                    required={bookingItem.required}
                    value={
                      formData[activityIndex] &&
                      formData[activityIndex].booking &&
                      formData[activityIndex].booking[bookingIndex] &&
                      formData[activityIndex].booking[bookingIndex].value
                    }
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        activityIndex,
                        "booking",
                        null,
                        bookingIndex,
                        bookingItem.id,
                        bookingItem.required,
                        bookingItem.label
                      )
                    }
                  >
                    <option value="true">
                      {languageData.booking.ActivityForm.yes}
                    </option>
                    <option value="false">
                      {languageData.booking.ActivityForm.no}
                    </option>
                  </select>
                ) : (
                  <input
                    required={bookingItem.required}
                    type={bookingItem.type}
                    className="block w-full py-[0.375rem] px-[0.75rem] text-fs-16 leading-[1.5] appearance-none rounded-[.375rem] m-m mb-2 focus:outline-none focus:border focus:border-[#7EC2DD] focus:shadow-3xl focus:shadow-[#7EC2DD]"
                    value={
                      formData[activityIndex] &&
                      formData[activityIndex].booking &&
                      formData[activityIndex].booking[bookingIndex] &&
                      formData[activityIndex].booking[bookingIndex].value
                    }
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        activityIndex,
                        "booking",
                        null,
                        bookingIndex,
                        bookingItem.id,
                        bookingItem.required,
                        bookingItem.label
                      )
                    }
                  />
                )}
              </div>
            ))}
          </div>

          {activity.details.passengers && (
            <div>
              <div className="mt-[16px] m-b text-fs-12 mb-1 flex">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/adults/adults-o.svg`}
                  width={20}
                  height={17}
                  alt="icons adults"
                  className="mr-2 ml-1 w-[20px] h-[17px]"
                />
                {languageData.booking.ActivityForm.passengerInfo}
              </div>

              {activity.details.passengers.map((passengerGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="p-[1.3rem] bg-[#f4f4f4] rounded-[9px] mb-3"
                >
                  <div className="m-b text-fs-16 mb-2">
                    {languageData.booking.ActivityForm.person} #{groupIndex + 1}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {passengerGroup.map((passenger, passengerIndex) => (
                      <div key={passenger.id}>
                        <label>
                          <span className="m-s-b text-fs-14 m-0">{passenger.label}</span>
                          {passenger.required && (
                            <span className="text-red-100">*</span>
                          )}
                        </label>
                        {passenger.type === "select" ? (
                          <select
                            className="mb-2"
                            required={passenger.required}
                            value={
                              formData[activityIndex] &&
                              formData[activityIndex].passengers &&
                              formData[activityIndex].passengers[groupIndex] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ].value
                            }
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                activityIndex,
                                "passengers",
                                groupIndex,
                                passengerIndex,
                                passenger.id,
                                passenger.required
                              )
                            }
                          >
                            {passenger.options.map((option, optionIndex) => (
                              <option key={optionIndex} value={option.id}>
                                {languageData.countries[option.text]}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            required={passenger.required}
                            type="text"
                            className="m-0 rounded-lg m-b w-full py-[7px] px-[16px] text-fs-14 leading-[1.5] appearance-none focus:outline-none border border-[#ebebeb] placeholder:text-fs-12 placeholder:text-gry-70 mb-2"
                            value={
                              formData[activityIndex] &&
                              formData[activityIndex].passengers &&
                              formData[activityIndex].passengers[groupIndex] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ].value
                            }
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                activityIndex,
                                "passengers",
                                groupIndex,
                                passengerIndex,
                                passenger.id,
                                passenger.required
                              )
                            }
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
