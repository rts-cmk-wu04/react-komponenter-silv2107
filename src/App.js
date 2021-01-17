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
import Theme2 from "./components/theme2";
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
          <section className="firstPage">
              <article className="firstPage__travel">
                    { components.travel && components.travel.map(trip => {
                        return  <Travel key={trip.image} image={trip.image} category={trip.category} title={trip.title} description={trip.description}/>
                    })}
                </article>

                <article className="firstPage__outdoor">
                    { components.outdoor && components.outdoor.map(activity => {
                        return  <Outdoor key={activity.imgBig} imgBig={activity.imgBig} title={activity.title} category={activity.category} description={activity.description} img1={activity.img1} img2={activity.img2} img3={activity.img3}/>
                    })}
                </article>

                <article className="firstPage__services">
                    { components.services && components.services.map(service => {
                        return  <Services key={service.icon} icon={service.icon} title={service.title} description={service.description} theBackground={service.theBackground}/>
                    })}
                </article>

            
                <article className="firstPage__collections">
                    { components.collections && components.collections.map(collection => {
                        return  <Collections key={collection.imgMain} category={collection.category} imgMain={collection.imgMain} imgRound={collection.imgRound} title={collection.title} author={collection.author}/>
                    })}
                </article>
            </section>

        <section className="secondPage">
            <article className="secondPage__places">
                <Places/>
            </article>
            <article className="secondPage__latest">
                <Latest>
                    { components.latestContent && components.latestContent.map(content => {
                        return  <LatestContent key={content.imgLatest} imgLatest={content.imgLatest} title={content.title} description={content.description} colorTitle={content.colorTitle}/>
                    })}
                </Latest>
            </article>
            <article className="secondPage__FAndF">
                { components.FAndF && components.FAndF.map(content => {
                        return  <FAndF key={content.imgFit} imgFit={content.imgFit} title={content.title} description={content.description} colorTitle={content.colorTitle}/>
                })}
            </article>

            <article className="secondPage__theme">    
                { components.theme && components.theme.map(content => {
                    return <Theme key={content.imgBackground} imgBackground={content.imgBackground} title={content.title} description={content.description} colorTitle={content.colorTitle}/>
                })}
            </article>
        </section>
        
        <section className="thirdPage">
            <article className="thirdPage__theme2">    
                    { components.theme2 && components.theme2.map(content => {
                        return <Theme2 key={content.imgBackground} imgBackground={content.imgBackground} title={content.title} description={content.description} colorTitle={content.colorTitle}/>
                    })}
            </article>
            
            <article className="thirdPage__virtual">
                <Virtual/>
            </article>
            
            <article className="thirdPage__DAndE">
                { components.DAndE && components.DAndE.map(content => {
                    return <DAndE key={content.iconTheme} iconTheme={content.iconTheme} title={content.title} theBackground={content.theBackground}/>
                })}
            </article>

            <article className="thirdPage__newsDigest">
                <NewsDigest>
                    { components.newsContent && components.newsContent.map(content => {
                        return <NewsContent key={content.number} number={content.number} title={content.title} theColor={content.theColor} theBorder={content.theBorder}/>
                    })}
                </NewsDigest> 
            </article>
            
            <article className="thirdPage__readMore">
                { components.readMore && components.readMore.map(content => {
                        return <ReadMore key={content.theBackgroundImage} theBackgroundImage={content.theBackgroundImage}/>
                    })}
            </article>
        </section>
      </div>
  );
}

export default App;
