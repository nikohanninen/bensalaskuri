
const PriceInput = ({price, setPrice}) => {

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

     return(
        <div>
            <label>Syötä polttoaineen litrahinta </label>
            <input class='inputbox' type='text' value={price} onChange={handlePrice} ></input>
        </div>
    )
}

export default PriceInput