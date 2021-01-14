import { useEffect, useState} from "react";
import './App.css';
import Collections from "./components/collections";
import DAndE from "./components/DAndE";
import FAndF from "./components/foodAndFashion";
import LatestContent from "./components/latestContent";
import Latest from "./components/latestNews";
import NewsContent from "./components/newsContent";
import NewsDigest from "./components/newsDigest";
import Outdoor from "./components/outdoor";
import Places from "./components/placesToSee";
import ReadMore from "./components/readMore";
import Services from "./components/serviceContainer";
import Theme from "./components/theme";
import Travel from "./components/travel";
import Virtual from "./components/virtual";

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

        { components.FAndF && components.FAndF.map(content => {
                return  <FAndF key={content.imgFit} imgFit={content.imgFit} title={content.title} description={content.description}/>
        })}

        { components.theme && components.theme.map(content => {
            return <Theme key={content.imgBackground} imgBackground={content.imgBackground} title={content.title} description={content.description}/>
        })}

        <Virtual/>

        { components.DAndE && components.DAndE.map(content => {
            return <DAndE key={content.iconTheme} iconTheme={content.iconTheme} title={content.title}/>
        })}

       <NewsDigest>
            { components.newsContent && components.newsContent.map(content => {
                return <NewsContent key={content.number} number={content.number} title={content.title}/>
            })}
        </NewsDigest> 
        
        { components.readMore && components.readMore.map(content => {
                return <ReadMore key={content.theBackgroundImage} theBackgroundImage={content.theBackgroundImage} theColor={content.theColor} theBorder={content.theBorder}/>
            })}
      </div>
  );
}

export default App;
