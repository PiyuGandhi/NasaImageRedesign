import './App.css';
import axios from 'axios';
import React from 'react';

// First iteration
// 1. Google like search box with search - form and state management, api management
// 2. Add autocomplete, multiple pages - form optimization, data handling
// 3. Add images of the day
// 4. Add central state management using Redux - Data manipulation, handling large data at scale,
// 5. Add animations
// 6. Add React optimizations in the form of useCallBack and useMemo

function App() {
  const [urls, setUrls] = React.useState([]);
  const [query, setQuery] = React.useState("");

  const APIKEY = "YvLRI5ChIJyIdmMZEHzNnrwA7ybdLpjeaEoiypXI";
  const IMAGE_ENDPOINT = "https://images-api.nasa.gov/";


  const handleSubmit = e => {

    if (query === "") {
      alert("Please enter a query.");
      return;
    }

    axios.get(IMAGE_ENDPOINT + `search?q=${query}&media_type=image`).then(resp => {
      console.log(resp)
      const data = resp['data']['collection']['items'].map(ele => {return ele['links'][0]['href']});
      setUrls(data)
    }).catch(err => console.error(err));
  
  } 
  React.useEffect(() => { console.log("URLS: ", urls) }, [urls])
  React.useEffect(()=>{console.log("Query ",query)},[query])

  return (
    <div className="w-full flex flex-col">
      <div className="m-auto flex flex-col">
        <input className="border-2 border-black rounded-xl p-2 m-5" placeholder="Query" onChange={e => { setQuery(e.target.value) }} />
        <button className=" rounded-full m-4 hover:shadow-xl hover:-translate-y-2 p-2 bg-green-500 capitalize text-white font-semibold" onClick={handleSubmit}>SUBMIT</button>
      </div>
    <div className="flex flex-wrap flex-row w-full">
      {urls.length ? urls.map(url => { return <ImageDisplay url={url} />}) :""}
      </div>
      </div>
  );
}

const ImageDisplay = props => {
  return (
    <div className="transform transition duration-500 hover:scale-110 p-5">
      <img alt={props.url} src={props.url} />
    </div>
  )
}

export default App;
