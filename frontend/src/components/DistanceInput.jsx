
const DistanceInput = ({distance, setDistance}) => {

    const handleDistance = (event) => {
        setDistance(event.target.value)
  }
    
    return(
        <div>
            <label>Syötä ajetut kilometrit </label>
            <input class='inputbox' type='text' value={distance} onChange={handleDistance}></input>
        </div>
    )
}

export default DistanceInput