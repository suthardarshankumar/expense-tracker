import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../action/expenseAction'
import OptionMenu from './OptionMenu'

const FilterExpenses = () => {
    const dispatch = useDispatch();
    const { filter } = useSelector((state) => state)

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <>
            <div className="mb-4 px-10 py-4">
                <OptionMenu
                    label="Filter by Category"
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: "300px" }}
                />
            </div>
        </>
    )
}

export default FilterExpenses;