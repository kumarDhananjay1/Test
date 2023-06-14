import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";

function App() {
  const [check, setCheck] = useState(false);
  const [country, setCountry] = useState([]);
  const selectedValue = ["Australia", "Bermuda"];

  useEffect(() => {
    const CountryData = [
      "Australia",
      "Bermuda",
      "Canada",
      "Cameroon",
      "Denmark",
      "France",
      "Finland",
      "Germany"
    ];

    setCountry([...CountryData]);
  }, []);

  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-3">Select Multi Dropdown Checkbox in React js</h3>

            <form className="row g-3" method="post">
              <div className="col-md-5">
                <div className="text-dark">
                  <Multiselect
                    isObject={false}
                    onRemove={(event) => {
                      console.log(event);
                    }}
                    onSelect={(event) => {
                      console.log(event);
                    }}
                    options={country}
                    selectedValues={selectedValue}
                    showCheckbox={!check ? true : false}
                  />
                  <div className="form-group pt-20">
                    <input
                      className="form-control"
                      type="checkbox"
                      value={check}
                      checked={check}
                      onChange={(e) => setCheck(!check)}
                    />
                    <label>Checkbox Disabled ?</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;