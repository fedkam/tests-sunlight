import React from "react";
import "./App.css";
import CreateGroup from "./containers/create-group";

function getData() {
  return {
          welcome:{
                  listData:[
                    {
                      "headerName": "Здравствуйте",
                      "delimiter":",",
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
                    },
                    {
                      "headerName": "Адрес",
                      "infoText": "115487, г Москва, ул Садовая Б., д 45",
                    },
                    {
                      "headerName": "Телефон",
                      "infoText": "+7(902)266-44-63",
                    },
                    {
                      "headerName": "Исполнитель",
                      "infoText": "Группа компаний Fulogy",
                    },
                    {
                      "headerName": "Менеджер",
                      "infoText": "Широков Евгений",
                    },
                    {
                      "headerName": "Телефон",
                      "infoText": "+7(499)116-34-00",
                    },
                    {
                      "headerName": "Монтаж",
                      "infoText": "Да",
                    }
                ]},
          composition:{
                  groupHeader:"Состав комплекта",
                  listData:[
                    {
                      "headerName": "Светильник по вашему размеру",
                      "delimiter":" -",
                      "infoText": "2",
                      "otherText":"шт"
                    },
                    {
                      "headerName": "Блок питания 100 Вт.",
                      "delimiter":" -",
                      "infoText": "1",
                      "otherText":"шт"
                    },
                    {
                      "headerName": "Крепления",
                      "delimiter":" -",
                      "infoText": "саморезы каждые 30 см",
                    },
                    {
                      "headerName": "Комментарий",
                      "infoText": "Можно мне гаечный ключ вместо отвертки",
                    },
                    {
                      "headerName": "Конфигурация светильника (вариант 2)",
                      "infoText": "scheme",
                    },
                ]},
          specifications:{
                  groupHeader:"Технические характеристики",
                  listData:[
                    {
                      "headerName": "Длина 1-го светильника (L1)",
                      "infoText": "1375",
                      "otherText":"мм"
                    },
                    {
                      "headerName": "Длина 2-го светильника (L2)",
                      "infoText": "2110",
                      "otherText":"мм"
                    },
                    {
                      "headerName": "Вид профиля",
                      "infoText": " Накладной профиль с молочным рассеивателем",
                    },
                    {
                      "headerName": "Лента",
                      "infoText": " Светодиодная лента 24V SMD 2835 140LED/m 18W IP33 Day White LUX CRI 90",
                    },
                    {
                      "headerName": "Суммарная потребляемая мощность",
                      "infoText": "63",
                      "otherText":"Вт"
                    },
                    {
                      "headerName": "Вывод питающего кабеля из светильника",
                      "infoText": " через заглушку",
                    },
                    {
                      "headerName": "Стык светильников",
                      "infoText": "под углом 45 градусов",
                    },
                    {
                      "headerName": "Длина кабеля до блока питания (Lcb)",
                      "infoText": "240",
                      "otherText":"см"
                    }
                ]},
          summ:{
                  listData:[
                    {
                      "headerName": "ИТОГО",
                      "infoText": "14 000",
                      "otherText":"РУБ."
                    }
                ]},
  };
};

function App() {
  let {welcome, info, composition, specifications, summ} = getData();

  return (
    <div className="App">
      <CreateGroup groupData={welcome}/>
      <CreateGroup groupData={info}/>
      <CreateGroup groupData={composition}/>
      <CreateGroup groupData={specifications}/>
      <CreateGroup groupData={summ}/>
    </div>
  );
};

export default App;
