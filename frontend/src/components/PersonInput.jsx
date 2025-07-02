
const PersonInput = ({persons, setPersons}) => {
    const handlePersons = (event) => {
        setPersons(event.target.value)
    }

     return(
        <div>
            <label>Syötä henkilöiden määrä </label>
            <input class='inputbox' type='text' value={persons} onChange={handlePersons} ></input>
        </div>
    )
}

export default PersonInput