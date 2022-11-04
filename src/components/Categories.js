import React, { useState, useEffect } from 'react'
import './main.css'
import Game from './Game'
import { useDispatch, useSelector } from 'react-redux'
import defineCategories from '../actions/defineCategories'
import defineWinnerX from '../actions/defineWinnerX'
import defineWinnerO from '../actions/defineWinnerO'

const Categories = () => {

    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedValue, setSelectedValue] = useState("")
    const [finalCategory, setFinalCategory] = useState("")
    const [finalValue, setFinalValue] = useState("")

    const dispatch = useDispatch();

    const categories = useSelector(state => state.categoryReducer.category)

    useEffect(() => {
        dispatch(defineCategories())
        dispatch(defineWinnerX())
        dispatch(defineWinnerO())
    }, [])

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
            <h2>Please Select A Category...</h2>
            <form className="flexCont" onSubmit={handleSubmit}>
                <select onChange={handleChange}>
                    <option defaultValue={'Pick A Category'} >Pick A Category</option>
                    {Array.isArray(categories)
                        ?
                        categories.map(category => <option key={category.category} value={category.value}>{category.category}</option>)
                        :
                        ""}
                </select>
                <button type='submit'>Submit</button>
            </form>
            {/* <img src='./downArrowAnimated.gif' size='50px' /> */}
            {finalValue !== "" ? <Game value={finalValue} text={finalCategory} /> : null}
            <h5>
                <div>Click <a href='/'>HERE</a> to Reset the Game</div>
            </h5>
        </>
    )
}

export default Categories