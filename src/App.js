import React from "react";
import "./App.css";
import CreateGroup from "./containers/create-group";
import Row from "./components/Row";

function getData() {
  return {
          welcome:{
                  listData:[
                    {
                      "headerName": "Здравствуйте",
                      "infoText": "Покупатель Покупателевич",
                    },
                    {
                      "headerName": "Ваш заказ",
                      "delimiter":" №",
                      "infoText": "T-RP/00129",
                      "otherText": "оформлен",
                    },
                    {
                      "headerName":"Спасибо, что выбрали нас! В ближайшее время с Вами свяжется менеджер для подтверждения заказа.",
                      "delimiter":"",
                    }
                ]},
          info:{
                  groupHeader:"Информация о заказе",
                  listData:[
                    {
                      "headerName": "Заказчик",
                      "infoText": "Покупатель Покупателевич",
                    },
                    {
                      "headerName": "Email",
                      "infoText": "amozik@yandex.ru",
                    }
                ]},
  };
};

function App() {
  let {welcome, info} = getData();

  return (
    <div className="App">
      <CreateGroup groupData={welcome}/>
      <CreateGroup groupData={info}/>
    </div>
  );
};

export default App;
