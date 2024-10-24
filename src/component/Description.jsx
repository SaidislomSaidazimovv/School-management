import React from 'react'

function Description({title, extraStyle}) {
  return (
    <p className={`text-sm font-kubmh leading-[18.63px] text-gray-400 ${extraStyle}`}>{title}</p>
  )
}

export default Description