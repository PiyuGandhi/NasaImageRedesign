import './App.css';
import axios from 'axios';
import React from 'react';

// First iteration
// 1. Google like search box with search
// 2. Add autocomplete
// 3. Add images of the day
// 4. Add framer animations
// 5. Add trending page

function App() {
  const [urls, setUrls] = React.useState([]);
  const [query, setQuery] = React.useState("nebula");

  const APIKEY = "YvLRI5ChIJyIdmMZEHzNnrwA7ybdLpjeaEoiypXI";
  const IMAGE_ENDPOINT = "https://images-api.nasa.gov/";


  const handleSubmit = e => {
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
        <input className="border-2" placeholder="Query" onChange={e => { setQuery(e.target.value) }} />
        <button onClick={handleSubmit}>Submit Query</button>
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
      <img src={props.url} />
    </div>
  )
}

export default App;
