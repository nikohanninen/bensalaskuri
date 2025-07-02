
const ConsumptionInput = ({consumption, setConsumption}) => {

    const handleConsumption = (event) => {
        setConsumption(event.target.value)
    }

    return(
        <div>
            <label>Syötä auton kulutus muodossa l/100km </label>
            <input class='inputbox' type='text' value={consumption} onChange={handleConsumption}></input>
        </div>
    )
}

export default ConsumptionInput