import React, { useState } from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, hairColor, initialAge} = props;

    const [age, setAge] = useState({initialAge});

    const addAge = () => {
        setAge({initialAge:age.initialAge + 1})
    };

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age.initialAge} </p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ addAge }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard