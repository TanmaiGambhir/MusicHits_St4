import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="float-container">
      
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/kul/rezensionen/cd/2022/ana-de-la-vega-paul-rivinius_my-paris.jpg.jpg/size=470x264.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/kul/rezensionen/cd/2022/danae-doerken_odyssee1.jpg.jpg/size=470x264.jpg"/>
      </div>
      </div>
      <div class="float-container">
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/kul/rezensionen/cd/2022/amy-beach_trio-orleon1.jpg.jpg/size=470x264.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/kul/rezensionen/cd/2022/daniel-hope_alex-botvinov_silvestrov.jpg.jpg/size=470x264.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/kul/rezensionen/cd/2021/bach-cellosuiten_benedict-kloeckner.jpg.jpg/size=470x264.jpg"/>
      </div>
      <div class="float-child">
      <img src="https://www.rbb-online.de/content/dam/rbb/rbb/fernsehen/30_favoriten/2022/Die-30-sch-nsten-Berliner-Hinterh-fe/BuntangemalteT-rinden-HackeschenH-fen.jpg.jpg/size=470x264.webp"/>
      </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>With its wide list of new stars and amazing craftsmen, ‘Music Hits’ Music Group is home to an accumulation of the best-realized record marks in the music business including Asylum, Atlantic, East West, Elektra, Nonesuch, Reprise, Rhino, Roadrunner, Rykodisc, Sire, ‘Music Hits’ Bros. furthermore, Word, just as ‘Music Hits’/Chappell Music, one of the world’s driving music distributors, with an index of more than one million copyrights around the world.

It involves a variety of organizations went for helping specialists accomplish long-haul innovative and money-related achievements while furnishing shoppers with the most astounding quality music content accessible.

It is occupied with the recorded music business (counting craftsman administrations) and the music distributing business and is the main organization in a national and global collection that works through various universal offshoots and licensees in excess of 50 nations.

Our recorded music business incorporates our developing craftsman administrations business, which offers craftsman the executives, promoting, visiting, fan clubs, VIP ticketing, sponsorships and brand supports, and various outsider arrangements that encourage the closeout of music-based substance straightforwardly to shoppers.



Our craftsman administrations business works with It craftsmen just as specialists not generally marked to its names.

Our essential music distributing business, ‘Music Hits’, is one of the world’s driving music distributors, with an inventory of more than one million tunes from in excess of 65,000 musicians, and incorporates Non-Stop Music, a full administration music creation library organization.</p>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Subject</label>
        <input type="text" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />

        <button className="btn">Submit</button>
      </form>
    </div>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
