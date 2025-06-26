import React from 'react'

export const Card = ({list,index}) => {
  return (
     <li className="  shadow-sm h-full hover:shadow-2xl mx-2 border
     border-gray-300 p-6 rounded-xl
     ">
  <figure className='h-[250px]'>
    <img className='h-full w-full object-cover rounded-2xl'
      src={list?.image}
      alt="imagedata" />
  </figure>
 <div className="mt-4 space-y-1">
    <p className="bg-blue-100 text-blue-800 w-fit px-3 py-1 rounded-full text-xs font-semibold shadow">
      SL {index + 1}
    </p>
    <h2 className="text-lg font-bold text-gray-800">{list?.name}</h2>
    <div className='flex gap-2 font-semibold text-blue-600'>
        <h3 className=" ">Brand: {list?.brand}</h3>
    <h3 className="">Sensor: {list?.sensorType}</h3>
    </div>
    <h3 className="text-sm text-gray-600">Megapixels: {list?.megapixels}</h3>
    <p className="text-sm text-gray-700 mt-2">{list?.description}</p>
  </div>
</li>
  )
}
