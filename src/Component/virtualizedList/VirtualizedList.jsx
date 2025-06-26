import React from 'react'
import { Virtuoso } from 'react-virtuoso';

export const VirtualizedList = () => {

    const dummyObjects = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`
}));
  return (
<div className='h-[500px] border my-6'>
     <Virtuoso
        totalCount={dummyObjects.length}
        itemContent={(index) => {
          const item = dummyObjects[index]
          return (
            <div
              style={{
                padding: '12px',
                borderBottom: '1px solid #ccc',
                background: index % 2 === 0 ? '#DED3C4' : '#fff'
              }}
            >
              {item.id}. {item.name}
            </div>
          )
        }}
      />
</div>
  )
}
