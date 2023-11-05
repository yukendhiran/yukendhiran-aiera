import React from 'react'

function minifoot() {
  return (
<>
  <div className='fixed bottom-0 left-0 right-0 px-8 h-12 text-yellow-300 flex items-center justify-between'>
    <div className='flex items-center'>
      <a href='mailto:info@aieraadvert.com' className='flex items-center justify-start'>
        info@aieraadvert.com
      </a>
      <span>|</span>
      <a href='tel:+918220967296' className='flex items-center justify-end'>
        +918220967296
      </a>
    </div>
    <div className='flex justify-end'>
      last
    </div>
  </div>
</>
  )
}

export default minifoot