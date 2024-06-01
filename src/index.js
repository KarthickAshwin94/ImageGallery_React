import react from 'react'
import reactDOM from 'react-dom/client'
import Image1 from './images/Basenji.jpg'
import Image2 from './images/Beagle.webp'
import Image3 from './images/Bull_Dog.webp'
import Image4 from './images/French-bulldog.webp'
import Image5 from './images/German_Shepard.webp'
import Image6 from './images/Golden_Retriever.jpeg'
import Image7 from './images/Labrador_Retriever.jpg'
import Image8 from './images/Pembroke Welsh Corgi.jpeg'



import './style.css'
const root=reactDOM.createRoot(document.getElementById("root"))

// Now we need to create 8 components which must have 8 images which must be present inside an image gallery


function One()
{
  return(
    <div className="Dog_One">
      <img src={Image1} ></img>
      <h1>Basenji</h1>
    </div>
  )
}
function Two()
{
  return(
    <div className='Dog_Two'>
      <img src={Image2}></img>
      <h1>Beagle</h1>
    </div>
  )
}

function Three()
{
  return(
    <div className="Dog_Three">
  <img src={Image3}></img>
      <h1>Bull_Dog</h1>
    </div>
  )
}
function Four()
{
  return(
    <div className="Dog_Four">
       <img src={Image4}></img>
      <h1>French-bulldog</h1>
    </div>
  )
}
function Five()
{
  return(
    <div className="Dog_Five">
       <img src={Image5}></img>
      <h1>German_Shepard</h1>
    </div>
  )
}
function Six()
{
  return(
    <div className="Dog_Six">
       <img src={Image6}></img>
      <h1>Golden_Retriever</h1>
    </div>
  )
}
function Seven()
{
  return(
    <div className="Dog_Seven">
       <img src={Image7}></img>
      <h1>Labrador_Retriever</h1>
    </div>
  )
}
function Eight()
{
  return(
    <div className="Dog_Eight">
       <img src={Image8}></img>
      <h1>Pembroke Welsh Corgi</h1>
    </div>
  )
}
root.render(
  <div className="container_main">
 <div className="container_main_one">
    <One></One>
    <Two></Two>
    <Three></Three>
    <Four></Four>
  </div>
  <div className="container_main_two">
    <Five></Five>
    <Six></Six>
    <Seven></Seven>
    <Eight></Eight>
  </div>
  </div>
 
)