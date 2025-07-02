
const ConsumptionInput = ({consumption, setConsumption}) => {

    const handleConsumption = (event) => {
        setConsumption(event.target.value)
    }

    console.log(consumption)

    return(
        <div>
            <label>Syötä auton kulutus muodossa l/100km </label>
            <input type='number' value={consumption} onChange={handleConsumption}></input>
        </div>
    )
}

export default ConsumptionInput