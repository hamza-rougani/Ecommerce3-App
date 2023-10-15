import React from 'react'
document.addEventListener("scroll",()=>{
 // Get a reference to the element you want to measure
var element = document.getElementById("img");

// Get the position of the element relative to the viewport
var elementRect = element.getBoundingClientRect();

// Calculate the distance from the top of the element to the top of the viewport
var distanceFromTop = elementRect.top;
var heightDocument = window.innerHeight;
// if(distanceFromTop)
element.style.left=distanceFromTop+"px"

 
})

function Introduction() {
  return (
    <div className='introduction'>
      <img id='img' src="fog.png" alt=""/>
      <img id='img' src="fog.png" alt=""/>
    </div>
  )
}

export default Introduction
