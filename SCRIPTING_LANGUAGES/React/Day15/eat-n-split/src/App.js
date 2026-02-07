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
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleShowAddFriend(){
    setShowAddFriend((show) => !show)
  }
  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleSelectFriend(friend){
    setSelectedFriend((cur) => cur?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }

  function handleSplitBill(value){
    setFriends((friends) => friends.map((friend) => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend))
    setSelectedFriend(null)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelectFriend={handleSelectFriend}
        selectedFriend={selectedFriend} />
        {showAddFriend &&<FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id}/>}
    </div>
  )
}
function Button({children, onClick}){
  return(
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )}

function FriendsList({friends, onSelectFriend, selectedFriend}){
  // const friends = initialFriends;
  return (<ul>
    {friends.map((friend) => (
      <Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend} />
    ))}
  </ul>)
}

function Friend({friend , onSelectFriend, selectedFriend}){
  return <li className={selectedFriend?.id === friend.id ? 'selected' : ''}>
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
      <Button onClick={() => onSelectFriend(friend)}>{selectedFriend?.id === friend.id ? 'Close' : 'Select'}</Button>
    
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

function FormSplitBill({selectedFriend, onSplitBill}){
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const [whoIsPaying, setWhoIsPaying] = useState('user')
  const paidByFriend = bill ? bill - paidByUser : ''
  function handleSubmit(e){
    e.preventDefault()

    if(!bill || !paidByUser) return
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)
  }
  return(
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2> Split bill with {selectedFriend.name}</h2>
      <label> Bill value</label>
      <input type="text"  value={bill} onChange={(e) => setBill(Number(e.target.value))} />
      <label> Your expense</label>
      <input type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value)>bill ? paidByUser : Number(e.target.value))} />
      <label> {selectedFriend.name}'s Expense</label>
      <input type="text" value={paidByFriend} disabled />
      <label> Who is paying the bill</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className='button'>Split bill</button>
    </form>
  )
}

export default App
