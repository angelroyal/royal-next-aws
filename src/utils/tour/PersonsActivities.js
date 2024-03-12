import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { Add, Remove } from "@mui/icons-material/";
import LanguageContext from "../../language/LanguageContext";
import { Button, Typography, TextField } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";

import Children2OutlinedIcon from "../../assets/icons/utils/searchBox/kid.svg";
import Person2OutlinedIcon from "../../assets/icons/utils/searchBox/person-autocomplete.svg";

export default function PersonsActivities({ OnApply }) {
  const [rooms, setRooms] = useState([]);
  const [ageError, setAgeError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalChildren, setTotalChildren] = useState(0);
  const [totalAdults, setTotalAdults] = useState(2);

  useEffect(() => {
    const personsData = localStorage.getItem("personsData");

    if (personsData) {
      const dataPerson = JSON.parse(personsData);
      setTotalAdults(dataPerson[0].adults);
      setTotalChildren(dataPerson[0].children);
    } else {
      setTotalAdults(2);
      setTotalChildren(0);
    }
  }, []);

  useEffect(() => {
    const tourData = JSON.parse(localStorage.getItem("tourData"));
    if (tourData && Array.isArray(tourData)) {
      setRooms(
        tourData.map((data) => ({
          adult: data.adults,
          child: data.children,
          ages: data.ages || [],
        }))
      );
    } else {
      setRooms([{ adult: 2, child: 0, ages: [] }]);
    }
  }, []);

  const handlenumAdultChange = (value, index) => {
    const newRooms = [...rooms];
    newRooms[index].adult = value;
    setRooms(newRooms);

    const sumAdults = newRooms.reduce((acc, room) => {
      return acc + room.adult;
    }, 0);
    setTotalAdults(sumAdults);
  };

  const handleAgeChange = (value, childIndex, roomIndex) => {
    if (value < 0 || value > 12) {
      setAgeError(true);
    } else {
      setAgeError(false);
      const newRooms = [...rooms];
      newRooms[roomIndex].ages[childIndex] = value;
      setRooms(newRooms);
    }
  };

  const addChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child < 10) {
      newRooms[roomIndex].child++;
      newRooms[roomIndex].ages.push("");
      setRooms(newRooms);
      setTotalChildren(totalChildren + 1);
    }
  };

  const removeChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].child > 0) {
      newRooms[roomIndex].child--;
      newRooms[roomIndex].ages.pop();
      setRooms(newRooms);
      setTotalChildren(totalChildren - 1);
    }
  };

  const printTourData = () => {
    setShowDropdown(false);

    const tourData = rooms.map((room) => {
      return {
        adults: room.adult,
        children: room.child,
        ages: room.ages,
      };
    });
    OnApply(tourData);

    const sumChildren = rooms.reduce((acc, room) => {
      return acc + room.child;
    }, 0);

    const sumAdults = rooms.reduce((acc, room) => {
      return acc + room.adult;
    }, 0);

    const sumPeople = sumAdults + sumChildren;

    localStorage.setItem("totalPeopleTour", JSON.stringify(sumPeople));
    localStorage.setItem("tourData", JSON.stringify(tourData));
    localStorage.setItem("personsData", JSON.stringify(tourData));
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <Dropdown
      show={showDropdown}
      onClose={() => setShowDropdown(false)}
      className="width100"
    >
      <Dropdown.Toggle
        onClick={() => setShowDropdown(!showDropdown)}
        className="dropdown-room"
      >
        <span style={{ padding: "0 10px" }}>
          <Image src={Person2OutlinedIcon} />
          {totalAdults}
        </span>{" "}
        <span style={{ padding: "0 10px" }}>|</span>
        <span style={{ padding: "0 10px" }}>
          <Image src={Children2OutlinedIcon} />
          {totalChildren}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-container">
        <div className="equilateral-triangle-bottom"></div>

        <div>
          {rooms.map((room, index) => (
            <div key={index} className="divider-room">
              <Container>
                <Row className="row-data-room">
                  <Col sm={8} className="col-padding">
                    <Typography
                      variant="subtitle1"
                      className="title-room-result"
                    >
                      {
                        languageData.SearchBox.tabTour.personsActivities
                          .titlePeople
                      }
                    </Typography>
                  </Col>
                  <Col sm={4} className="icon-delete-room"></Col>
                </Row>
              </Container>

              <Container className="m-tour-people-search">
                <Row className="row-room">
                  <Col className="subtitle-col-room">
                    {languageData.SearchBox.tabTour.personsActivities.adult}
                  </Col>
                  <Col className="col-padding">
                    <div className="rooms-center">
                      <Button
                        disabled={room.adult === 1}
                        onClick={() =>
                          handlenumAdultChange(room.adult - 1, index)
                        }
                        aria-label="Reduce el número de Adultos"
                      >
                        <Remove />
                      </Button>
                      <Typography
                        variant="subtitle1"
                        style={{ margin: "0px 0px" }}
                      >
                        {room.adult}
                      </Typography>
                      <Button
                        disabled={room.adult === 20}
                        onClick={() =>
                          handlenumAdultChange(room.adult + 1, index)
                        }
                        aria-label="Aumenta el número de Adultos"
                      >
                        <Add />
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Row className="row-room">
                  <Col>
                    <div className="subtitle-col-room">
                      {
                        languageData.SearchBox.tabTour.personsActivities
                          .children
                      }
                    </div>
                    {/* <small>(Menores de 12)</small> */}
                  </Col>
                  <Col className="col-padding">
                    <div className="rooms-center">
                      <Button
                        disabled={room.child === 0}
                        onClick={() => removeChild(index)}
                        aria-label="Reduce el número de Niños"
                      >
                        <Remove />
                      </Button>
                      <Typography
                        variant="subtitle1"
                        style={{ margin: "0px 0px" }}
                      >
                        {room.child}
                      </Typography>
                      <Button
                        disabled={room.child === 10}
                        onClick={() => addChild(index)}
                        aria-label="Aumenta el número de Niños"
                      >
                        <Add />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col>
                  {[...Array(room.child)].map((_, childIndex) => (
                    <Container key={childIndex} style={{ margin: "10px 0" }}>
                      <Row className="row-room">
                        <Col style={{ fontSize: "12px" }}>
                          {
                            languageData.SearchBox.tabTour.personsActivities
                              .ageChildren
                          }{" "}
                          {childIndex + 1}
                        </Col>
                        <Col>
                          <div key={childIndex} className="flex-text-children">
                            <TextField
                              id="outlined-number"
                              label={
                                languageData.SearchBox.tabTour.personsActivities
                                  .age
                              }
                              value={room.ages[childIndex]}
                              onChange={(event) =>
                                handleAgeChange(
                                  event.target.value,
                                  childIndex,
                                  index
                                )
                              }
                              type="number"
                              required
                              variant="outlined"
                              size="small"
                              style={{ width: 80 }}
                              inputProps={{
                                maxLength: 2,
                                max: 12,
                                min: 0,
                                onKeyPress: (event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                },
                              }}
                              error={ageError}
                              helperText={ageError ? "0-17 años" : ""}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  ))}
                </Col>
              </Row>
            </div>
          ))}
          <div className="button-room-page-search">
            <button className="button-apply-room" onClick={printTourData}>
              {languageData.SearchBox.tabTour.personsActivities.button}
            </button>
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}
