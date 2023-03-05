import React from 'react'

export const Error = ( {children} ) => {
  return (
    <div style={{ color:'red', textAlign:'center', fontSize:'3rem' }}>
        {children}
    </div>
  )
}

