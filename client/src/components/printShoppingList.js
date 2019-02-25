import React from 'react'

const PrinterFriendlyShoppingList = (props) => {
  if (props.location.shoppingList === undefined || props.location.shoppingList.length === 0  ){
    return(
      <React.Fragment>
        <p> Your shopping list is empty! </p>
        <a href="/">Return to meal plan</a>
      </React.Fragment>
    )
  }
  else {
    return(<div className="print">
      Shopping List:
      <br />
      {props.location.shoppingList.map(item =>
        <p> &#9634; &nbsp; {item.quantity} {item.unit} {item.description}</p>
      )}
      {console.log(props.location.shoppingList)}
    </div>
  )
  }
}

export default PrinterFriendlyShoppingList
