import React, { Fragment } from 'react'
import MealSummary from './MealSummary'
import AvailableMeals from './AvailableMeals'

export default function Meals() {
  return (
    <Fragment>
      <MealSummary/>
      <AvailableMeals/>
    </Fragment>
  )
}
