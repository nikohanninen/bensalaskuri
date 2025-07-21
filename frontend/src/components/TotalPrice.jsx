
const TotalPrice = ({distance, consumption, price, persons}) => {

    const totalPrice = ((Number(consumption) * Number(distance)) / 100 * Number(price)).toFixed(2)

    const priceDivided = totalPrice / persons

    const displayDividedPrice = () => {
        if(Number(persons) > 1){
            return(<p>{`Hinta jaettuna ${persons} henkilölle: `} {priceDivided.toFixed(2)} €</p>)
        }
        return(null)
    }

    return(
       <div>
        Kokonaishinta matkalle:  {totalPrice} €
        {displayDividedPrice()}
       </div> 
    )
}

export default TotalPrice