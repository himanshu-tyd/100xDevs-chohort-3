import React from 'react'

const Card = ({children}) => {
  return (  
    <div style={{backgroundColor:"black" , color:'white' , padding: "20px 25px"  }} >
        {children}
    </div>
  )
}

export default Card