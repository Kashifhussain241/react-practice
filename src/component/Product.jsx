/// props//
// what is props?
//  props is a way to pass data from parent component to child component
// props is an object that contains the data that we want to pass to 
// the child component. we can access the props in the child component 
// using this.props. we can also use destructuring to access the props.
const Product = (props) => {
  const { name, price, description } = props;
  return ( 
    <div> 
      <h2> Name: {name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Description: {description}</p>
    </div>
  )
} 
export default Product;
// destructuring props is a way to extract the values of the props object and assign 
// them to variables.
// const Product = ({ name, price, description }) => {
//   return ( 
//     <div> 
//       <h2> Name: {name}</h2>
//       <p>Price: ${price.toFixed(2)}</p>
//       <p>Description: {description}</p>
//     </div>
//   )
// } 
