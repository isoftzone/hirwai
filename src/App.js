import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import About from "./pages/About";
import Service from "./pages/Service";
import ArborManagement from "./pages/ArborManagement";
import GardenManagement from "./pages/GardenManagement";
import NurseryTreeFarm from "./pages/NurseryTreeFarm";
import TrimmingPruning from "./pages/TrimmingPruning";
import PestsWeedsControl from "./pages/PestsWeedsControl";
import FruitsFlowersGarden from "./pages/FruitsFlowersGarden";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import PortfolioOne from "./pages/PortfolioOne";
import PortfolioTwo from "./pages/PortfolioTwo";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import Hardscapes from './pages/Hardscapes';
import Softscapes from './pages/Softscapes';
import Maintenance from './pages/Maintenance';
import Aquascapes from './pages/Aquascapes';
import PlantLibrary from './pages/PlantLibrary';
import Landscape from './pages/Landscape';
import Architect from './pages/Architect';
// import TreeReplantation from './pages/TreeReplantation';
import SpiceGarden from './pages/SpiceGarden';
import VegetableGarden from './pages/VegetableGarden';
import Mounts from './pages/Mounts';
import TreeReplanting from './pages/TreeReplanting';
import LawnExpansion from './pages/LawnExpansion';
import AromaGardens from './pages/AromaGardens';
import Topiaries from './pages/Topiaries';
import ShrubPlantation from './pages/ShrubPlantation';
import DesignerWalls from './pages/DesignerWalls';
import RockGardens from './pages/RockGardens';
import Deck from './pages/Deck';
import Pergolas from './pages/Pergolas';
import PavedAreas from './pages/PavedAreas';
import OrnamentalFabrication from './pages/OrnamentalFabrication';
import Murals from './pages/Murals';
import Gazebo from './pages/Gazebo';
import Pathways from './pages/Pathways';
import Aquaspace from './pages/Aquaspace';
import Ponds from './pages/Ponds';
import IrrigationSystems from './pages/IrrigationSystems';
import Fountains from './pages/Fountains ';
import Waterfalls from './pages/Waterfalls';
import IndoorNOutdoor from './pages/IndoorNOutdoor';
import Succulent from './pages/Succulent';
import MaintenanceNServices from './pages/MaintenanceNServices';
import DecorativePots from './pages/DecorativePots';
import PlantDecoration from './pages/PlantDecoration';
import Plants from './pages/Plants';
import SwimmingPools from './pages/SwimmingPools';
import Sculptures from './pages/Sculptures';

function App() {
  useEffect(() => {
    new WOW.WOW({
        live: false
      }).init();
    }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
      
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} exact element={<HomeThree />} />
            <Route path={`${process.env.PUBLIC_URL}/home-two`} exact element={<HomeTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/`} exact element={<HomeThree />} />
            <Route path={`${process.env.PUBLIC_URL}/about`} exact element={<About />} />
            <Route path={`${process.env.PUBLIC_URL}/services`} exact element={<Service />} />

            <Route path={`${process.env.PUBLIC_URL}/hardscapes`} exact element={<Hardscapes />} />
            <Route path={`${process.env.PUBLIC_URL}/designerWalls`} exact element={<DesignerWalls />} />
            <Route path={`${process.env.PUBLIC_URL}/rockGardens`} exact element={<RockGardens />} />
            <Route path={`${process.env.PUBLIC_URL}/deck`} exact element={<Deck />} />
            <Route path={`${process.env.PUBLIC_URL}/sculptures`} exact element={<Sculptures />} />
            <Route path={`${process.env.PUBLIC_URL}/pergolas`} exact element={<Pergolas />} />
            <Route path={`${process.env.PUBLIC_URL}/pavedAreas`} exact element={<PavedAreas />} />
            <Route path={`${process.env.PUBLIC_URL}/ornamentalFabrication`} exact element={<OrnamentalFabrication />} />
            <Route path={`${process.env.PUBLIC_URL}/murals`} exact element={<Murals />} />
            <Route path={`${process.env.PUBLIC_URL}/gazebo`} exact element={<Gazebo />} />
            <Route path={`${process.env.PUBLIC_URL}/pathways`} exact element={<Pathways />} />


            <Route path={`${process.env.PUBLIC_URL}/softscapes`} exact element={<Softscapes />} />
            <Route path={`${process.env.PUBLIC_URL}/spiceGarden`} exact element={<SpiceGarden />} />
            <Route path={`${process.env.PUBLIC_URL}/Mounts`} exact element={<Mounts />} />
            <Route path={`${process.env.PUBLIC_URL}/vegetableGarden`} exact element={<VegetableGarden />} />
            <Route path={`${process.env.PUBLIC_URL}/lawnExpansion`} exact element={<LawnExpansion />} />
            <Route path={`${process.env.PUBLIC_URL}/aromaGardens`} exact element={<AromaGardens />} />
            <Route path={`${process.env.PUBLIC_URL}/topiaries`} exact element={<Topiaries />} />
            <Route path={`${process.env.PUBLIC_URL}/shrubPlantation`} exact element={<ShrubPlantation />} />

            <Route path={`${process.env.PUBLIC_URL}/aquascapes`} exact element={<Aquascapes />} />
            <Route path={`${process.env.PUBLIC_URL}/ponds`} exact element={<Ponds />} />
            <Route path={`${process.env.PUBLIC_URL}/irrigationSystems`} exact element={<IrrigationSystems />} />
            <Route path={`${process.env.PUBLIC_URL}/fountains`} exact element={<Fountains />} />
            <Route path={`${process.env.PUBLIC_URL}/swimmingPools`} exact element={<SwimmingPools />} />
            <Route path={`${process.env.PUBLIC_URL}/waterfalls`} exact element={<Waterfalls />} />
            <Route path={`${process.env.PUBLIC_URL}/aquaspace`} exact element={<Aquaspace />} />

            <Route path={`${process.env.PUBLIC_URL}/plantLibrary`} exact element={<PlantLibrary />} />
            <Route path={`${process.env.PUBLIC_URL}/indoorNOutdoor`} exact element={<IndoorNOutdoor />} />
            <Route path={`${process.env.PUBLIC_URL}/succulent`} exact element={<Succulent />} />
            <Route path={`${process.env.PUBLIC_URL}/maintenanceNServices`} exact element={<MaintenanceNServices />} />
            <Route path={`${process.env.PUBLIC_URL}/decorativePots`} exact element={<DecorativePots />} />
            <Route path={`${process.env.PUBLIC_URL}/plantDecoration`} exact element={<PlantDecoration />} />
            <Route path={`${process.env.PUBLIC_URL}/plants`} exact element={<Plants />} />


            {/* <Route path={`${process.env.PUBLIC_URL}/maintenance`} exact element={<Maintenance />} /> */}
            {/* <Route path={`${process.env.PUBLIC_URL}/landscape`} exact element={<Landscape />} /> */}
            <Route path={`${process.env.PUBLIC_URL}/architect`} exact element={<Architect />} />



            <Route path={`${process.env.PUBLIC_URL}/treeReplanting`} exact element={<TreeReplanting />} />

            <Route path={`${process.env.PUBLIC_URL}/arbor-management`} exact element={<ArborManagement />} />
            <Route path={`${process.env.PUBLIC_URL}/garden-management`} exact element={<GardenManagement />} />
            <Route path={`${process.env.PUBLIC_URL}/nursery`} exact element={<NurseryTreeFarm />} />
            <Route path={`${process.env.PUBLIC_URL}/trimming`} exact element={<TrimmingPruning />} />
            <Route path={`${process.env.PUBLIC_URL}/weeds-control`} exact element={<PestsWeedsControl />} />
            <Route path={`${process.env.PUBLIC_URL}/flowers-garden`} exact element={<FruitsFlowersGarden />} />
            <Route path={`${process.env.PUBLIC_URL}/team`} exact element={<Team />} />
            <Route path={`${process.env.PUBLIC_URL}/team-details`} exact element={<TeamDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/portfolio-1`} exact element={<PortfolioOne />} />
            <Route path={`${process.env.PUBLIC_URL}/portfolio-2`} exact element={<PortfolioTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/faq`} exact element={<Faq />} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} exact element={<Blog />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-grid`} exact element={<BlogGrid />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-details`} exact element={<BlogDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} exact element={<Contact />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaAngleUp />} />
    </Router>
  );
}

export default App;