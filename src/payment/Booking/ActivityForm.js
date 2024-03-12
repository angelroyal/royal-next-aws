import React, { useEffect, useState, useContext } from "react";
import { Form } from "react-bootstrap";
import LanguageContext from "../../language/LanguageContext";


export const ActivityForm = (props) => {

  const { languageData } = useContext(LanguageContext);

  const {
    combinedActivity,
    formArrayActivityItems,
    index,
    setFormArrayActivityItems,
  } = props;

  // console.log(combinedActivity);

  const [formData, setFormData] = useState([]); // Estado para almacenar los datos del formulario
  const [trueArrays, setTruArrays] = useState(false);

  const handleInputChange = (e, index, key) => {
    const { value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      id: key,
      value,
    };
    setFormData(updatedFormData);
  };

  const handleSelectChange = (e, index, key) => {
    const { value } = e.target;
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      id: key,
      value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    let required = true;
    let auxFormArrayActivityItems = [...formArrayActivityItems];
    // console.log(combinedActivity);
    Object.entries(combinedActivity.details).forEach(
      ([keyDetail, itemDetail]) => {
        const resultadoFiltrado = formData.filter(
          (objeto) => objeto.id === itemDetail.id
        );
        if (resultadoFiltrado.length === 0) {
          if (itemDetail.required === true) {
            required = false;
          }
        } else {
          if (itemDetail.required === true) {
            if (resultadoFiltrado[0].value === "") {
              required = false;
            }
          }
        }
      }
    );

    // console.log(index);
    // console.log(auxFormArrayActivityItems);
    auxFormArrayActivityItems[index].details = formData;
    auxFormArrayActivityItems[index].required = required;
    setFormArrayActivityItems(auxFormArrayActivityItems);
  };

  useEffect(() => {
    if (
      formArrayActivityItems.length > 0 &&
      combinedActivity.details &&
      combinedActivity.details.length > 0
    ) {
      setTruArrays(true);
    }
  }, [formArrayActivityItems.length > 0 && combinedActivity]);

  useEffect(() => {
    if (
      formArrayActivityItems.length > 0 &&
      combinedActivity.details &&
      combinedActivity.details.length > 0
    ) {
      handleSubmit();
    }
  }, [trueArrays]);

  useEffect(() => {
    if (
      formArrayActivityItems.length > 0 &&
      combinedActivity.details &&
      combinedActivity.details.length > 0
    ) {
      handleSubmit();
    }
  }, [formData]);

  return (
    <>
      {combinedActivity.details && (
        <>
          <div className="title-data mb-1 flex">
            <img
              src="https://sandboxmexico.com/assets/icons/tour/tour-o.svg"
              alt="no found"
              className="me-2 ms-1"
            />
            {combinedActivity.title}
          </div>

          <div className="form-activity-body mb-3">
            {combinedActivity.details.map((value, index) => (
              <div key={index}>
                {value.required === true && (
                  <span class="input-obligations">*</span>
                )}

                <label className="mb-1">
                  {value.label && (
                    <b>{value.label }</b>
                  )}
                </label>
                {value.type === "text" ? (
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px", background: "#FFFFFF" }}
                    placeholder={languageData.paymentActivities.writeHere}
                    className="mb-2"
                    value={formData[index] ? formData[index][value.id] : ""} // Obtener el valor del textarea desde el estado formData
                    onChange={(e) => handleInputChange(e, index, value.id)} // Aquí se pasa el índice y la clave
                  />
                ) : (
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-2"
                    value={formData[index] ? formData[index][value.id] : ""}
                    onChange={(e) => handleSelectChange(e, index, value.id)}
                  >
                    <option value="">{languageData.paymentActivities.selectAnOption}</option>{" "}
                    {/* Opción por defecto */}
                    {value.options.map((option, keyOption) => (
                      <option value={option.id} key={keyOption}>
                        {option.text}
                      </option>
                    ))}
                  </Form.Select>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
