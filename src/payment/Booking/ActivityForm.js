import React, { useEffect, useState, useContext } from "react";
// import LanguageContext from "../../language/LanguageContext";

export const ActivityForm = ({ activityPreBooking, setFormActivityItems }) => {
  // const { languageData } = useContext(LanguageContext);
  const [formData, setFormData] = useState({});

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
    isRequired
  ) => {
    let newValue = e.target.value; 

    if (e.target.tagName === 'SELECT') {
      newValue = e.target.options[e.target.selectedIndex].text;
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
      const activityData = {
        type: "activity",
        id: activityPreBooking[activityIndex].id,
        details: {
          booking: [],
          passengers: []
        }
      };
  
      // PROC BOOKING
      if (activity.booking) {
        activityData.details.booking = activity.booking.map(item => ({
          id: item.id,
          value: item.value
        }));
      }
  
      // PROC PASSENGERS
      if (activity.passengers) {
        activity.passengers.forEach(group => {
          group.forEach(item => {
            if (item.required && (!item.value || item.value === "")) {
              allRequiredFieldsFilled = false;
            }
            activityData.details.passengers.push({
              id: item.id,
              value: item.value
            });
          });
        });
      }
  
      filteredFormData.push(activityData);
    });
  
    if (allRequiredFieldsFilled) {
      setFormActivityItems(filteredFormData);
    } else {
      alert('Por favor, complete todos los campos requeridos antes de continuar.');
    }
  };
  

  return (
    <>
      {activityPreBooking.map((activity, activityIndex) => (
        <div key={activity.id}>
          {/* TITLE TOUR */}
          <div className="title-data mb-1 flex">
            <img
              src="https://sandboxmexico.com/assets/icons/tour/tour-o.svg"
              alt="no found"
              className="me-2 ms-1"
            />
            {activity.name}
          </div>

          {/* SECTION INPUT DYNAMIC */}
          <div className="form-activity-body mb-3">
            {activity.details.booking.map((bookingItem, bookingIndex) => (
              <div key={bookingItem.id}>
                {/* INPUT REQUIRED */}
                <label>
                  <b>{bookingItem.label}</b>
                  {bookingItem.required && (
                    <span className="input-obligations">*</span>
                  )}
                </label>

                {/* DYNAMIC INPUTS */}
                <input
                  type={bookingItem.type}
                  className="form-control mb-2"
                  value={
                    formData[activityIndex] &&
                    formData[activityIndex].booking &&
                    formData[activityIndex].booking[bookingIndex] &&
                    formData[activityIndex].booking[bookingIndex][
                      bookingItem.id
                    ]
                  }
                  onChange={(e) =>
                    handleInputChange(
                      e,
                      activityIndex,
                      "booking",
                      null,
                      bookingIndex,
                      bookingItem.id,
                      bookingItem.required
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* PASSENGERS CONTAIN */}
          {activity.details.passengers && (
            <div>
              {/* TITLE TOUR */}
              <div className="title-data mb-1 flex">
                <img
                  src="https://sandboxmexico.com/assets/icons/adults/adults-o.svg"
                  alt="no found"
                  className="me-2 ms-1"
                />
                Información de pasajero
              </div>

              {activity.details.passengers.map((passengerGroup, groupIndex) => (
                <div key={groupIndex} className="form-activity-body mb-3">
                  <div className="m-b text-fs-16 mb-2">
                    Persona #{groupIndex + 1}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {passengerGroup.map((passenger, passengerIndex) => (
                      <div key={passenger.id}>
                        <label>
                          <b>{passenger.label}</b>
                          {passenger.required && (
                            <span className="input-obligations">*</span>
                          )}
                        </label>
                        {passenger.type === "select" ? (
                          <select
                            className="form-select mb-2"
                            value={
                              formData[activityIndex] &&
                              formData[activityIndex].passengers &&
                              formData[activityIndex].passengers[groupIndex] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ][passenger.id]
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
                                {option.text}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={
                              formData[activityIndex] &&
                              formData[activityIndex].passengers &&
                              formData[activityIndex].passengers[groupIndex] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ] &&
                              formData[activityIndex].passengers[groupIndex][
                                passengerIndex
                              ][passenger.id]
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
    </>
  );
};
