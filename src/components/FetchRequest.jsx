import React, { useState } from "react";

function FetchRequest() {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [titleList, setTitleList] = useState([]);
  const [title, setTitle] = useState("batman");

  const makeApiCall = async () => {
    const url = "http://www.omdbapi.com?apikey=c032e2d7";
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    let titleListFromData = [];
    const iteration = await data.Search.forEach((element) => {
        titleListFromData.push(element.Title);
        titleListFromData.push('--');
    });
    setTitleList(titleListFromData);

    console.log("le data from API", data);
    setDataFromApi(data);
  };
  return (
    <div>
      <p>fetch data from API </p>
      list = {titleList}
      {JSON.stringify(dataFromApi)}
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
