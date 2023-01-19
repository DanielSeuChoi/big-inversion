const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    return (
        <div className='card'>
            <h1>{lastName} ,{firstName}</h1>
            <p>age: {age}</p>
            <p>Hair Color: {hairColor}</p>

        </div>

    )
}



export default PersonCard