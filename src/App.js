import React from "react";
import "./App.css";
import CreateGroup from "./containers/create-group";
import Row from "./components/Row";

function getData() {
  return {
          info:{
                  groupHeader:"Информация о заказе",
                  listData:[
                    {
                      "headerName": "Заказчик",
                      "delimiter":":",
                      "infoText": "Покупатель Покупателевич",
                    }
                  ]},
  };
};

function App() {
  let {info} = getData();

  return (
    <div className="App">
      <CreateGroup groupData={info}/>
    </div>
  );
};

export default App;
