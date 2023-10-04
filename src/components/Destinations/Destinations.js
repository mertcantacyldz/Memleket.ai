import TurkeyMap from "turkey-map-react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Tooltip } from "antd";
import { cloneElement, useEffect, useState } from "react";
import Navbar from "../HomePage/Navbar";
import Modal from "./ModalComponent/ModalComponent";


function Destinations() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [show, setShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [sentiment, setSentiment] = useState("");
  const unSelectedCityColor = "white";
  const selectedCityColor = "#ffbc00";
  const [isOpen, setIsOpen] = useState(false);
  console.log("is Open: " + isOpen);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
 
  async function callOpenAIAPI(cityData) {
    console.log("Calling the OpenAI API");


    // For 0-10
    // What is the sentiment of this tweet with a value between 0 and 10 (10 being its very positive)?

    const APIBody = {
      model: "text-davinci-003",
      prompt: `I am currently in the city of ${cityData} and would like to receive information about historical sites, local food, natural attractions of the city and a general city guide`,
      temperature: 0,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setSentiment(data.choices[0].text.trim()); // Positive or negative
      });
  }

  const renderCity = (city, cityData) => {
    const cityStyle = {
      stroke: "white",
      strokeWidth: selectedCity.id === cityData.id ? 1 : 0,
      pointerEvents: "auto",
    };

    return (
      <Tooltip title={cityData.name} key={cityData.id}>
        {cloneElement(city, {
          style: cityStyle,
          onClick: (e) => {
            toggleFunc(cityData);
            callOpenAIAPI(cityData.name);
          },
          children: cloneElement(city.props.children, {
            style: {
              fill:
                selectedCity.id === cityData.id
                  ? selectedCityColor
                  : unSelectedCityColor,
              cursor: "pointer",
            },
          }),
        })}
      </Tooltip>
    );
  };

  const toggleFunc = (cityData) => {
    setShow(true);
    setSelectedCity(cityData);
  };

  const searchFunc = () => {
    setShow(true);
    callOpenAIAPI(inputValue);
  };

  const isOpenFunc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-fethiye bg-cover min-h-screen relative  ">
      <Navbar className="absolute z-20" />
      {isOpen && <Modal isOpenFunc={isOpenFunc} isOpen={isOpen} />}
      
      <div className=" flex  items-center justify-center flex-col mt-10 gap-12  ">
        <div className="relative z-20  bg-navyellow  flex items-center justify-center px-10 py-4 w-10 hover:w-80  rounded-full transition-all delay-150 durution-500 ease-in-out group">
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="border-none bg-none outline-none  max-w-0 group-hover:max-w-full focus:max-w-full bg-navyellow placeholder:text-white  font-medium text-white transition-all  delay-300 durution-500 ease-in-out  "
            placeholder="Choose the city you want to visit "
          ></input>

          <button onClick={searchFunc}>
            <BiSearchAlt2 className="h-10 w-10 ml-2 text-white"></BiSearchAlt2>
          </button>
        </div>
        {show && (
          <div
            href="#"
            className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative z-20"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {selectedCity.name || inputValue}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {" "}
              {sentiment !== ""
                ? sentiment
                : "Şehir Bilgileri Oluşturuluyor..."}
            </p>
         <div className="w-full flex items-center justify-end mt-10">   <button onClick={isOpenFunc} class="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow ">
            Get more detailed information with Memleket.ai            </button></div>
          </div>
        )}

        <div className=" relative z-20 h-[70rem] w-[90rem]">
          <TurkeyMap
            cityWrapper={renderCity}
            hoverable={true}
            customStyle={{ fill: "#ffbc00" }}
          ></TurkeyMap>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
