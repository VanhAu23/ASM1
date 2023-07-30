import React, { useState } from 'react'

const AddProductPage = ({ AddProduct }) => {
    const [inputValues, setInputValues] = useState();
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputValues({ ...inputValues, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        AddProduct(inputValues);

    }
    return (
        <div><form action="" onSubmit={onHandleSubmit}>
            <input type="text" placeholder='ProductName' onChange={onHandleChange} name='name' />
            <input type="text" placeholder='Enter Price' onChange={onHandleChange} name='value' />
            <button type='submit'>ADD</button>
        </form></div>
    )
}

export default AddProductPage   