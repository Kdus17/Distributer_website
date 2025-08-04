import { Box, Cross, Pencil, Plus, Trash, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function TradingProducts({see3, setsee3, TradePro, setTradePro}) {


useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/local/trade');
      const data = await res.json();
      console.log(data);
      setTradePro(Array.isArray(data.trade) ? data.trade : []);
    } catch (err) {
      console.error('❌ Fetch error:', err);
    }
  };

  fetchData();
}, []);

const saveChanges = async (product) => {
  console.log("he tried though")
  try {
    const res = await fetch(`http://localhost:4000/local/trade/${product._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });

    if (!res.ok) throw new Error('Failed to save changes');

    const data = await res.json();
    alert('Changes saved!');
    console.log('✅', data);
  } catch (err) {
    console.error('Save error:', err);
    alert('Failed to save changes');
  }
};



const addQuality = (index) => {
  const updated = [...TradePro];
  updated[index].qualities.push("New Quality");
  setTradePro(updated);
};

const removeQuality = (cardIndex, qualityIndex) => {
  const updated = [...TradePro];
  updated[cardIndex].qualities.splice(qualityIndex, 1);
  setTradePro(updated);
};


const deleteCard = async (index, e) => {
  e.stopPropagation();
  const toDelete = TradePro[index];

  try {
    const res = await fetch(`http://localhost:4000/local/trades/${toDelete._id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete');

    const updated = TradePro.filter((_, i) => i !== index);
    setTradePro(updated);
    alert('Deleted successfully');
  } catch (err) {
    console.error('Delete error:', err);
    alert('Failed to delete');
  }
};



  return (
    <div className='flex flex-col px-24 py-5 min-h-screen'>
      
      {/**Head */}
      <div className='flex justify-between py-4 lg:px-10'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold '>Trading Products Managment</h1>
          <p className='text-gray-600'>Manage your trading products catalog</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded-xl py-3 px-4 flex gap-4' onClick={()=>setsee3(!see3)}>
            <Plus />
            Add new category
          </div>
        </div>
      </div>

      {/**Cards */}
      <div className='grid md:grid-cols-2 gap-8 lg:px-10'>
        {Array.isArray(TradePro) && TradePro.map((item, index) => (
          <div key={index} className='h-full col-span-1 border-1 rounded-2xl relative flex flex-col p-4 gap-3'>
            <div className='flex justify-between'>
              {console.log("here")}
              <div className='flex gap-4 items-center'>
                <div className='bg-red-700 flex items-center justify-center h-10 w-10 rounded-md'>
                  <Box className='text-white'/>
                </div>
                <div className='flex flex-col'>
                  <h2 className='font-bold'>{item.name || 'Unnamed Category'}</h2>
                  <span>{item.qualities.length} item{item.qualities.length !== 1 ? 's' : ''}</span>
                </div>
              </div>

              <div className='flex gap-4 items-center'>
                <div className='bg-blue-700 h-8 w-8 flex items-center justify-center rounded-md'>
                  <Pencil className='text-white p-1'/>
                </div>
                <div className='bg-red-700 h-8 w-8 flex items-center justify-center rounded-md'>
                  <Trash className='text-white p-1' onClick={(e)=>{deleteCard(index, e)}}/>
                </div>
              </div>

            </div>

            <p>Complete range</p>

            {item.qualities.map((quality, i) => (
              <div key={i} className='p-2 bg-red-700/30 rounded-md flex justify-between items-center'>
                <input type="text" value={quality} id={i} onChange={(e)=>{
                  const updated = [...TradePro]
                  updated[index].qualities[i] = e.target.value;
                  setTradePro(updated)
                }}/>
                <X className='hover:text-red-800' onClick={() => removeQuality(index, i)} />
              </div>
            ))}

            <div className='p-2 bg-red-700/30 rounded-md flex justify-center items-center self-center w-full cursor-pointer' onClick={()=>{addQuality(index)}}>
              Add
            </div>
    {/* Save Button */}
        <div
            className="bg-red-600 hover:bg-red-700 text-white w-full text-center px-6 py-3 rounded-xl font-semibold cursor-pointer"
        onClick={()=>{saveChanges(item)}}
        >
            Save
        </div>

          </div>
        ))}
      </div>
    </div>
  )
}
