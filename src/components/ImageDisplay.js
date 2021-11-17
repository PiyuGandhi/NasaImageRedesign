import React from "react";


const InfoIcon = props => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gray">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
</svg>
    )
}

const ToolTip = props => {
    const [isHover, setIsHover] = React.useState(false);
    const image = props.image;
    const imageTitle = image['data'][0]['title'];
    const imageDescription = image['data'][0]['description'];
    const imageDate = image['data'][0]['date_created'];
    
    const handleHoverStart = e => {
        setIsHover(true);
    }

    const handleHoverEnd = e => {
        setIsHover(false);
    }

    return (
        <div className="absolute z-10 right-7 top-7 flex " onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <InfoIcon />
            {isHover ? (<div className="text-xs px-5 rounded-lg overflow-scroll max-h-56 max-w-56  py-5 bg-gray-100">
                <p className="font-semibold ">Image Title:</p> {imageTitle} <br/>
                <p className="font-semibold ">Image Date:</p> {imageDate} <br/>
                <p className="font-semibold ">Image Description:</p> {imageDescription} <br/>
                </div>)
                : ""}
        </div>
    )
}

const ImageDisplay = props => {
    const image = props.image;
    const imageUrl = image['links'][0]['href'];
    return (
        <div className="transform transition duration-500 hover:scale-110">
        <ToolTip image={image}/>
        <div className=" overflow-hidden  ">
            
            <img className=" border-2 object-fill border-gray-500  m-5 max-w-72 max-h-72" alt={props.url} src={imageUrl} />
            </div>
        </div>
    )
}

export default ImageDisplay;