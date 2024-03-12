import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';

import '../assets/styles/web/Tour/StyleFIlterTour.css';

import { ReactComponent as IconStar } from "../assets/icons/utils/others/Star-filter.svg";


function valuetext(value) {
    return `${value}°C`;
}

export default function FilterTourTest() {


    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className='cont-filter-tour'>

            <div className='d-flex justify-content-between cont-btn-reset-result'>
                <h7 className="text-black-filter d-flex align-items-center">Filtrar Resultados</h7>
                <Button className='text-blue-filter-tour'>Resetear</Button>
            </div>

            <div className='line-filters-tour'></div>

            {/* ACCORDION RANGE PRICE */}
            <Accordion defaultExpanded className='cont-accordion-filter-tour'>
                <AccordionSummary
                    className='accordion-summary-filter-tour'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h6><b>Rango de precio</b></h6>

                </AccordionSummary>

                <AccordionDetails>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex flex-column gap-2'>
                            <span className='text-grey-filter-tour-s'>Mínimo</span>
                            <span className='text-grey-filter-tour-s'>$1500</span>
                        </div>

                        <div className='d-flex flex-column gap-2'>
                            <span className='text-grey-filter-tour-s'>Máximo</span>
                            <span className='text-grey-filter-tour-s'>$40,000</span>
                        </div>
                    </div>

                    <Box sx={{ width: 250 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            className='slider-filter-range-price'
                        />
                    </Box>


                    <div className='d-flex justify-content-between'>
                        <div className='min-and-max-cont'>
                            <span className='text-grey-filter-tour-s'>Desde</span>
                            <input type='number' className='cont-number-range-price'></input>
                        </div>
                        <div className='min-and-max-cont'>
                            <span className='text-grey-filter-tour-s'>Hasta</span>
                            <input type='number' className='cont-number-range-price'></input>
                        </div>
                    </div>

                </AccordionDetails>

                <AccordionActions>
                    <Button className='btn-apply-range-price'>Aplicar</Button>
                </AccordionActions>

            </Accordion>

            <div className='line-filters-tour'></div>

            {/* ACCORDION TOURS */}

            <Accordion defaultExpanded className='cont-accordion-filter-tour' id="arrow-accordion">
                <AccordionSummary
                    className='accordion-summary-filter-tour'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <h7><b>Tour</b></h7>
                </AccordionSummary>

                <AccordionDetails>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='all-tour-a' type='checkbox' />
                        <label for="all-tour-a" className='text-black-filter-s cont-checkbox-cursor'>Todos</label>
                    </div>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='one-option-tour-a' type='checkbox' />
                        <label for="one-option-tour-a" className='text-black-filter-s cont-checkbox-cursor'>Xek Ha</label>
                    </div>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='two-option-tour-a' type='checkbox' />
                        <label for="two-option-tour-a" className='text-black-filter-s cont-checkbox-cursor'>Xcaret</label>
                    </div>

                    <div className='d-flex gap-2'>
                        <input id='three-option-tour-a' type='checkbox' />
                        <label for="three-option-tour-a" className='text-black-filter-s cont-checkbox-cursor'>Xplor</label>
                    </div>

                    <Accordion className='cont-accordion-filter-tour'>
                        
                        <AccordionSummary
                            className='cont-accordion-filter-tour-see-more'
                            expandIcon={<ExpandMoreIcon />}>
                            <h7><u className='text-blue-filter-tour-s'>Ver más</u></h7>
                        </AccordionSummary>


                    </Accordion>
                </AccordionDetails>

            </Accordion>

            <div className='line-filters-tour'></div>

            {/* ACCORDION CATEGORY */}

            <Accordion defaultExpanded className='cont-accordion-filter-tour'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='accordion-summary-filter-tour'
                >
                    <h6><b>Categoria</b></h6>

                </AccordionSummary>

                <AccordionDetails>

                    <div className='d-flex gap-2 mb-1 '>
                        <input id='all-category-a' type='checkbox' />
                        <label for="all-category-a" className='text-black-filter-s cont-checkbox-cursor'>Todos</label>
                    </div>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='one-option-category-a' type='checkbox' />
                        <label for="one-option-category-a" className='text-black-filter-s cont-checkbox-cursor'>Aventura</label>
                    </div>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='two-option-category-a' type='checkbox' />
                        <label for="two-option-category-a" className='text-black-filter-s cont-checkbox-cursor'>Excursiones de un dia</label>
                    </div>

                    <div className='d-flex gap-2 mb-1'>
                        <input id='three-option-category-a' type='checkbox' />
                        <label for="three-option-category-a" className='text-black-filter-s cont-checkbox-cursor'>Acción y naturaleza</label>
                    </div>

                    <Accordion className='cont-accordion-filter-tour'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className='cont-accordion-filter-tour-see-more'>
                            <h7><u className='text-blue-filter-tour-s'>Ver más</u></h7>
                        </AccordionSummary>
                    </Accordion>
                </AccordionDetails>
            </Accordion>

            <div className='line-filters-tour'></div>

            {/* ACCORDION STARS */}

            <Accordion defaultExpanded className='cont-accordion-filter-tour'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='accordion-summary-filter-tour'
                >
                    <h6><b>Estrellas</b></h6>

                </AccordionSummary>

                <AccordionDetails>
                    <div className='d-flex gap-4'>
                        <div className='cont-stars-filter-tour'>

                            <div className='d-flex gap-1'>
                                <input id='all-stars-a' type='checkbox' />
                                <label for="all-stars-a" className='text-black-filter-s cont-checkbox-cursor'>Todos</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='five-stars' />
                                <label for="five-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(5)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='four-stars' />
                                <label for="four-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(4)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>
                        </div>

                        <div className='cont-stars-filter-tour-two'>
                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id="three-stars" />
                                <label for="three-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(3)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1 mb-1'>
                                <input type='checkbox' id='two-stars' />
                                <label for="two-stars" className='star-center-gap cont-checkbox-cursor'>{[...Array(2)].map((value, index) => (
                                    <IconStar key={index} />
                                ))}</label>
                            </div>

                            <div className='d-flex gap-1'>
                                <input type='checkbox' id='one-star' />
                                <label for="one-star" className='star-center-gap cont-checkbox-cursor'><IconStar /></label>
                            </div>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <div className='line-filters-tour'></div>

        </div>
    )
}