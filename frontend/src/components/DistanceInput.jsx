
const DistanceInput = ({distance, setDistance}) => {

    const handleDistance = (event) => {
        setDistance(event.target.value)
  }

    console.log(distance)
    
    return(
        <div>
            <label>Syötä ajetut kilometrit muodossa km/h </label>
            <input type='number' value={distance} onChange={handleDistance}></input>
        </div>
    )
}

export default DistanceInput