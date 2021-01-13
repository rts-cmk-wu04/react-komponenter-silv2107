import { useEffect, useState} from "react";
import './App.css';
import Collections from "./components/collections";
import LatestContent from "./components/latestContent";
import Latest from "./components/latestNews";
import Outdoor from "./components/outdoor";
import Places from "./components/placesToSee";
import Services from "./components/serviceContainer";
import Travel from "./components/travel";

function App() {
    var [components, setComponents] = useState({})

    useEffect(function(){
        fetch("./data2.json")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                setComponents(data);
            })
    }, [])
   
    return (
      <div className="App">
        { components.travel && components.travel.map(trip => {
            return  <Travel key={trip.image} image={trip.image} category={trip.category} title={trip.title} description={trip.description}/>
        })}
        { components.outdoor && components.outdoor.map(activity => {
            return  <Outdoor key={activity.imgBig} imgBig={activity.imgBig} title={activity.title} category={activity.category} description={activity.description} img1={activity.img1} img2={activity.img2} img3={activity.img3}/>
        })}

        { components.services && components.services.map(service => {
            return  <Services key={service.icon} icon={service.icon} title={service.title} description={service.description}/>
        })}

        { components.collections && components.collections.map(collection => {
            return  <Collections key={collection.imgMain} category={collection.category} imgMain={collection.imgMain} imgRound={collection.imgRound} title={collection.title} author={collection.author}/>
        })}

        <Places/>
        <Latest>
            { components.latestContent && components.latestContent.map(content => {
                return  <LatestContent key={content.imgLatest} imgLatest={content.imgLatest} title={content.title} description={content.description}/>
            })}
        </Latest>


      
      </div>
  );
}

export default App;
