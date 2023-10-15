import React from 'react'

function Suggestion() {
  return (
    <div className='Suggestion containerAccountS'>
    <div className='title'>
    <div className='img'><img src="suggestion.png" alt="" /></div> Suggestion
    </div>
    <div className='content'>
      <div className='btn'>
        <h3>Suggestion</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi placeat vero similique unde modi veniam ab! Velit dolorem iusto dolorum.</p>
        <button>Submit Feedback</button>
      </div>
      <div className='btn'>
        <h3>List of feedbacks</h3>
        <p>Looks like you haven't submitted anything yet. We're looking forward to your feedback.</p>
        
      </div>
    </div>
 </div>
  )
}

export default Suggestion
