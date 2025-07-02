import { useState } from "react"
import Header from "./components/header"
import DistanceInput from "./components/DistanceInput"
import ConsumptionInput from "./components/ConsumptionInput"
import PriceInput from "./components/PriceInput"

const App = () => {

  const [distance, setDistance] = useState("")
  const [consumption, setConsumption] = useState("")
  const [price, setPrice] = useState("")

  return(
    <div>
      <Header/>
      <DistanceInput distance={distance} setDistance={setDistance}/>
      <br></br>
      <ConsumptionInput consumption={consumption} setConsumption={setConsumption}/>
      <br></br>
      <PriceInput price={price} setPrice={setPrice}/>
    </div>
  )
}
export default App
