/* eslint-disable react/prop-types */


export default function Products({list, removeItem}) {
  return (
      <div>
          {list.map((item) => {
              return (
                  <div key={item.id}>
                      <img src={ item.image} alt="" />
                      <h2>{ item.name}</h2>
                      <h2>{item.narx}</h2>
                      <button onClick={() => removeItem(item.id)}>delete</button>
                  </div>
              )
          })}
    </div>
  )
}
