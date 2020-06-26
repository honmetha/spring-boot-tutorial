import React, { Fragment } from 'react'

export const AddTransaction = () => {
  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expenses, positive - income)
          </label>
          <input type="number" placeholderp="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </Fragment>
  )
}
