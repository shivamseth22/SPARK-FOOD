import React from 'react'


const mydata = [
  {
    name:"shivam",
    age:"21",
    id:"1"
  },
  
  {
    name:"ram",
    age:"25",
    id:"2"
  },
  {
    name:"shyam",
    age:"28",
    id:"3"
  },
]
const MYRESTRO = ({mydata}) => {
  return (
    <div >
      <h1>{mydata.name}</h1>
      <h1>{mydata.age}</h1>
      <h1>{mydata.id}</h1>
    </div>
  )
}

const Footer = () => {
  return (
    <div className=' '>
    <h1>hello</h1>
      <MYRESTRO mydata={mydata[0]}/>
      <MYRESTRO mydata={mydata[1]}/>
      <MYRESTRO mydata={mydata[2]}/>
    </div>
  )
}

export default Footer