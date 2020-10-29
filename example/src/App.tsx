import React, { useState, useCallback } from 'react'

import { PackedGrid } from 'react-packed-grid'

function GridItemPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: 'whitesmoke',
        display: 'grid',
        placeContent: 'center',
        width: '100%',
        height: '100%',
        border: '2px solid black'
      }}
    >
      {children}
    </div>
  )
}

const App = () => {
  const focusRef = useCallback((el) => {
    el.focus()
  }, [])
  const [numBoxes, setNumBoxes] = useState(1)

  return (
    <>
      <div className='controls'>
        <label>
          Boxes
          <input
            ref={focusRef}
            type='number'
            min='1'
            value={numBoxes}
            onChange={(e) => setNumBoxes(Number.parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <PackedGrid className='fullscreen'>
        {() =>
          Array.from({ length: numBoxes }).map((_, idx) => (
            <GridItemPlaceholder>Box {idx + 1}</GridItemPlaceholder>
          ))
        }
      </PackedGrid>
    </>
  )
}

export default App
