import { useState } from 'react'
import React from 'react'



const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  function handleShowAddFriend(){
    setShowAddFriend((show) => !show)
  }
  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} />
        {showAddFriend &&<FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
        <FormSplitBill/>
    </div>
  )
}
function Button({children, onClick}){
  return(
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )}

function FriendsList({friends}){
  // const friends = initialFriends;
  return (<ul>
    {friends.map((friend) => (
      <Friend friend={friend} key={friend.id} />
    ))}
  </ul>)
}

function Friend({friend}){
  return <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    
  </li>
}

function FormAddFriend({onClick , onAddFriend}){
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')


  function handleSubmit(e){
    e.preventDefault()
    if(!name || !image) return
    const newFriend = {
      name,image: `${image}?=${crypto.randomUUID()}`,balance:0,
      id: crypto.randomUUID(),
    }
    console.log(newFriend)
    onAddFriend(newFriend)
    setName('')
    setImage('https://i.pravatar.cc/48')

    }

  return(
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Image URL</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill(){
  return(
    <form className='form-split-bill' >
      <h2> Split bill with</h2>
      <label> Bill value</label>
      <input type="text" />
      <label> Your expense</label>
      <input type="text" />
      <label> Expense</label>
      <input type="text" disabled />
      <label> Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <button className='button'>Split bill</button>
    </form>
  )
}

export default App
