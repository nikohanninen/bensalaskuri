import { useState } from "react"
import Header from "./components/Header"
import DistanceInput from "./components/DistanceInput"
import ConsumptionInput from "./components/ConsumptionInput"
import PriceInput from "./components/PriceInput"
import TotalPrice from "./components/TotalPrice"
import PersonInput from "./components/PersonInput"

const App = () => {

  const [distance, setDistance] = useState("")
  const [consumption, setConsumption] = useState("")
  const [price, setPrice] = useState("")
  const [persons, setPersons] = useState("")

  return(
    <div class='App'>
      <div class='wrapper'>
      <Header/>
      <div class='inputs'>
        <DistanceInput distance={distance} setDistance={setDistance}/>
        <br></br>
        <ConsumptionInput consumption={consumption} setConsumption={setConsumption}/>
        <br></br>
        <PriceInput price={price} setPrice={setPrice}/>
        <br></br>
        <PersonInput persons={persons} setPersons={setPersons}/>
      </div>
      <br></br>
      <TotalPrice distance={distance} consumption={consumption} price={price} persons={persons}/>
      </div>
    </div>
  )
}
export default App
