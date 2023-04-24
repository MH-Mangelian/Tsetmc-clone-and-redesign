import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//------------------------components------------------------------
import Header from "../components/Header"
import Footer from "../components/Footer"
import Medial from "../components/Medial"

//----------------------------Pages-------------------------------
import BondsPage from "../pages/BondsPage_inside/BondsPage"
import CommodityExchangePage from "../pages/CommodityExchangePage"
import InvestmentFunds from "../pages/InvestmentFunds"
import IranEnergyExchange from "../pages/IranEnergyExchange"
import IranExchange from "../pages/IranExchange"
import CodalNetwork from "../pages/CodalNetwork"
import NotFound from "../pages/NotFound"





function App() {
  

  return (
    <Router>
      <Header/>
      <Routes >
        <Route  path="/" element={<Medial />} />
        <Route  path="/bonds" element={<BondsPage />} />
        <Route  path="/commodity-exchange" element={<CommodityExchangePage />} />
        <Route  path="/investment-funds" element={<InvestmentFunds />} />
        <Route  path="/iran-energy-exchange" element={<IranEnergyExchange />} />
        <Route  path="/iran-exchange" element={<IranExchange />} />
        <Route  path="/codal-network" element={<CodalNetwork />} />
        <Route path="*" element={<NotFound />} />
      </Routes >
      <Footer/>
    </Router>
  )
}

export default App
