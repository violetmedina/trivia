import React, { useState, useEffect } from 'react'
import './main.css'
import Game from './Game'
import {useDispatch, useSelector} from 'react-redux'
import defineCategories from '../actions/defineCategories'

const Categories = () => {

    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedValue, setSelectedValue] = useState("")
    const [finalCategory, setFinalCategory] = useState("")
    const [finalValue, setFinalValue] = useState("")

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categoryReducer.category)

    useEffect(() => {

        dispatch(defineCategories())

    }, [])

        console.log(categories)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFinalCategory(selectedCategory)
        setFinalValue(selectedValue)
    }

    const handleChange = (e) => {
        setSelectedCategory(e.target.selectedOptions[0].innerText)
        setSelectedValue(e.target.value)
    }

    return (
        <>
        <div><a href='/'>Home</a></div>
        <form className="flexCont" onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                <option defaultValue={'Pick A Category'} hidden>Pick A Category</option>
                {Array.isArray(categories) ?
                categories.map(category => <option key={category.category} value={category.value}>{category.category}</option>)
                : ""}
            </select>
            <button type='submit'>Submit</button>
        </form>
        {finalValue !== "" ? <Game value={finalValue} text={finalCategory}/> : null}

        </>
    )
}

export default Categories