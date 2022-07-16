import React, { useState } from "react";
import Homepage from "./Homepage";
import Posters from "./Posters";

function FetchRequest() {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [titleList, setTitleList] = useState([]);
  const [posterList, setPosterList] = useState([]);
  const [title, setTitle] = useState("batman");

  const makeApiCall = async () => {
    const url = "http://www.omdbapi.com?apikey=c032e2d7";
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    let titleListFromData = [];
    let posterListFromData = [];
    const iteration = await data.Search.forEach((element) => {
        titleListFromData.push(element.Title);
        posterListFromData.push(element.Posters)
        titleListFromData.push('--');
    });
    setTitleList(titleListFromData);
    setPosterList(posterListFromData);

    console.log("le data from API", data);
    setDataFromApi(data);
  };
  return (
    <div>
      <p>Please insert the selected movie name</p>
      list = {titleList}
      Posters =  {JSON.stringify(dataFromApi)}
      {Posters(posterList)}
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button onClick={() => makeApiCall()}> fetch </button>
      
    </div>
  );
}

export default FetchRequest;
