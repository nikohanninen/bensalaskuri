
const TotalPrice = ({distance, consumption, price, persons}) => {

    const totalPriceStyle = {
        fontSize: '50px',
        textAlign:'center',
        paddingTop: '60px',
        paddingBottom:"20px"
    }

    const totalPrice = (Number(consumption) * Number(distance)) / 100 * Number(price)

    const priceDivided = totalPrice / persons

    const displayDividedPrice = () => {
        if(Number(persons) > 1){
            return(<p>{`Hinta jaettuna ${persons} henkilölle: `} {priceDivided.toFixed(2)} €</p>)
        }
        return(null)
    }

    return(
       <div style={totalPriceStyle}>
        Kokonaishinta matkalle:  {totalPrice} €
        {displayDividedPrice()}
       </div> 
    )
}

export default TotalPrice