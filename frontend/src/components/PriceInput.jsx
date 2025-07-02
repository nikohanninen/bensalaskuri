
const PriceInput = ({price, setPrice}) => {

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    console.log(price)

     return(
        <div>
            <label>Syötä polttoaineen litrahinta </label>
            <input type='number' value={price} onChange={handlePrice} ></input>
        </div>
    )
}

export default PriceInput