import React from "react";
import { Icon } from "@iconify/react";
import "./App.css";
import Display from "./Display";

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="burger">
            <Icon icon="ci:hamburger" />
          </div>

          <div className="youtube">
            <Icon icon="logos:youtube" />
          </div>
          <h5 className="mx">MX</h5>

          <div className="barra-nav">
            <input type="text" placeholder="Search"></input>
          </div>

          <button i className="btn">
            <Icon icon="material-symbols:search-rounded" className="search" />
          </button>
          <div className="micro">
            <Icon icon="mdi:microphone" className="micIcon" />
          </div>

          <div className="camera">
            <Icon icon="material-symbols:video-camera-back-rounded" />
          </div>
          <div className="bell">
            <Icon icon="ph:bell-duotone" />
          </div>
        </div>

        <div className="container2">
          <div className="home">
            <Icon icon="material-symbols:home" className="H" />
            <p className="p1">Home</p>
          </div>
          <div className="out">
            <Icon icon="teenyicons:svelte-outline" className="svelte" />
            <p className="p2">Shorts</p>
          </div>

          <div className="subscriptions">
            <Icon icon="ic:twotone-subscriptions" className="subP" />
            <p className="p3">Subscription</p>
          </div>

          <div className="round">
            <Icon icon="ic:round-history" />
            <p className="px">Histoy</p>
          </div>

          <hr className="h2"></hr>

          <div className="library">
            <Icon icon="material-symbols:video-library" className="liB" />
            <p className="p4">library</p>
          </div>

          <div className="watch">
            <Icon icon="ic:twotone-watch-later" className="later" />
            <p className="p5">Watch later</p>
          </div>

          <div className="like">
            <Icon icon="bx:like" className="bx" />
            <p className="p6">Liked videos</p>
          </div>
          <hr className="h2"></hr>
        </div>
      </header>
      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;
