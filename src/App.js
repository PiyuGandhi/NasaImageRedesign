import './App.css';
import axios from 'axios';
import React from 'react';
import ImageDisplay from './components/ImageDisplay';

// First iteration
// 1. Google like search box with search - form and state management, api management - done
// 2. Add autocomplete, multiple pages - form optimization, data handling
// 3. Add images of the day
// 4. Add central state management using Redux - Data manipulation, handling large data at scale,
// 5. Add animations - done
// 6. Add React optimizations in the form of useCallBack and useMemo

function App() {
  const [query, setQuery] = React.useState("");
  const [images, setImages] = React.useState([]);

  const [isLoading,setIsLoading] = React.useState(false);

  // const APIKEY = "YvLRI5ChIJyIdmMZEHzNnrwA7ybdLpjeaEoiypXI";
  const IMAGE_ENDPOINT = "https://images-api.nasa.gov/";


  const handleSubmit = e => {
    setIsLoading(true);

    if (query === "") {
      alert("Please enter a query.");
          setIsLoading(false);

      return;
    }

    axios.get(IMAGE_ENDPOINT + `search?q=${query}&media_type=image`).then(resp => {
      const data = resp['data']['collection']['items'];
      setImages(data)
    }).catch(err => console.error(err));
        
    setIsLoading(false);

  } 
  
  return (
    <div className="w-full h-screen m-auto flex flex-col">
      <div className="m-auto my-6 w-full flex flex-col">
        <p className='mx-auto text-4xl font-semibold'>Nasa Image Search</p>
        <input className="border-2 w-4/12 mx-auto border-blue-600 rounded-xl p-2 m-5 focus:ring-2 focus:ring-blue-600" placeholder="Enter Query" onChange={e => { setQuery(e.target.value) }} />
        <button disabled={isLoading} type='button' className={` ${isLoading ?  "opacity-10"  : "opacity-100"} flex justify-center rounded-full w-36 m-auto hover:shadow-xl hover:-translate-y-2 p-2 bg-green-500 capitalize text-white font-semibold`} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    <div className="flex flex-wrap flex-row w-screen">
      {images.length ? images.map(image => { return <ImageDisplay image={image} />}) :""}
      </div>
      </div>
  );
}


export default App;
