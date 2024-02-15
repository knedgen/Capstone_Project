import React, {useState} from 'react';

const formValues = {
        firstName: '',
        lastName: '',
        date: '',
        time: '',
        partySize: '',
        occasion: '',
};

export default function BookingForm() {
    const [values, setValues] = useState(formValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return (
        <form>
            <label>First Name </label>
            <input
                value={values.firstName}
                onChange={handleInputChange}
                name="firstName"
            />
            <br />
            <label>Last Name </label>
            <input
                value={values.lastName}
                onChange={handleInputChange}
                name="lastName"
            />
            <br />
            <label>Date </label>
            <input
                value={values.date}
                onChange={handleInputChange}
                name="date"
            />
            <br />
            <label>Time </label>
            <input
                value={values.time}
                onChange={handleInputChange}
                name="time"
            />
            <br />
            <label>Party Size </label>
            <input
                value={values.partySize}
                onChange={handleInputChange}
                name="partySize"
            />
            <br />
            <label>Occasion </label>
            <input
                value={values.occasion}
                onChange={handleInputChange}
                name="occasion"
            />
            <br />
        </form>
    )
};
