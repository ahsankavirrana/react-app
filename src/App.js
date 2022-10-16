import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(){

   const names = ['Ahsan', 'Kabir', 'Rana','Afsana', 'lisa',"nishi"]
   const products = [{name: 'Photoshop', price : '$99.00'},{name : 'VS Code', price : '$150.00 '},{name : 'MS Word', price : '$120.50'},{name : 'Netflix', price : '$40'} ]
   
   const NickName = names.map(name => name);
   console.log(NickName);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {/* <ProductDetail ProductDetail = {products[0].name} price = {products[0].price}></Product> */}
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <ProductDetail productName={product} price ={product.price}></ProductDetail>)
        }
        <ProductDetail productName = {products[0]} price = {products[0].price}></ProductDetail>
        <ProductDetail productName ={products[1]} price = {products[1].price}></ProductDetail>
        <ProductDetail productName = {products[2]} price = {products[2].price}></ProductDetail>
      </header>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(10)
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrease : {}</button>
      <button onMouseEnter={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users (){
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
    })
  })

  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
      
      
      {
        users.map(user => <li>{user.name + ', '+ 'ID : '+ user.id } {' , Phone : '+user.phone}</li>)
      }
      </ul>
    </div>
  )
}

function ProductDetail(props){
  const productStyle = {
    border : '1px solid green',
    borderRadius : '5px',
    backgroundColor : 'lightgreen',
    height : '200px',
    width : '400px',
    float : 'left',
    margin : '10px'
  }
  return (
    <div style={productStyle}>
      
      <h2>Name : {props.productName.name}</h2>
      <h4>Price  : {props.price}</h4>

      <button>BUY NOW</button>

    </div>
  )
}

export default App;
