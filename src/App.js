import React from "react";
import "./App.css";
import Row from "./components/Row"

 function getTestDistrictData() {
  let response = [
          {
            "welcome":[
              {
                "headerName": "Здравствуйте",
                "delimiter":",",
                "text": "Покупатель Покупателевич",
              }
            ]
          }
        ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

function App() {
  return (
    <div className="App">
      <Row headerName = "ХЭДЕР"
           delimiter = "-"
           infoText = "Какаято посылка"
           otherText = "Еще"/>
    </div>
  );
}

export default App;
