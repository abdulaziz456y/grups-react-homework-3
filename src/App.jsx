
import { useEffect, useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import { uid } from 'uid';
import Products from './components/Products';

const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

function App() {

  const id = uid();
  const img = 'https://picsum.photos/id/1/200/300';

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(getLocalStorage());
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: id, name: title, narx: price, image: img };
    setList([...list, newItem]);
    setTitle('')
    setPrice('')
  }

  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id)
    setList(newItem);
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list));
  }, [list]);

  return (
    <>
      <AddProduct
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
      />
      <Products list={list} removeItem={removeItem} />
     </>
  )
}

export default App
