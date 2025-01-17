import { useState } from 'react';
import PostList from './PostList'

function App() {
  const  [index1, setIndex1] = useState(-1)
  const items1 = ["Item 1", "Item 2", "Item 3"];
  const items2 = ["Item 11", "Item 12", "Item 13"];

  return (
    <div>
      <PostList title= "My Items" items={items1} onItemSelected={
      (index) => {
        setIndex1(index)
        console.log("Item selected", index)
      }
     } />
    {index1 != -1 && <p> item {index1} was selected </p>}
    <PostList title= "My Secone Items" items={items2} onItemSelected={
      (index) => {
        console.log("Item selected", index)
      }
     } /> 
     <div className= "alert alert-primary" role="alert">
     A simple primary alert—check it out!
     </div>

    </div>
  )
}

export default App