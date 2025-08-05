import { Box, Cross, Pencil, Plus, Trash, X } from 'lucide-react'
import React, { useEffect } from 'react'

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
  console.log(TradePro)
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
    const res = await fetch(`http://localhost:4000/local/trade/${toDelete._id}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete');
    console.log(res.json())
    const updated = TradePro.filter((_, i) => i !== index);
    setTradePro(updated);
    alert('Deleted successfully');
  } catch (err) {
    console.log(TradePro[index]);
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
<div className="grid gap-8 md:grid-cols-2 lg:px-10">
  {Array.isArray(TradePro) &&
    TradePro.map((item, index) => (
      <div
        key={index}
        className="relative col-span-1 flex h-full flex-col gap-4 rounded-2xl border border-gray-200 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between">
          {console.log("here")}
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-700">
              <Box className="text-white" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-bold text-gray-800">
                {item.productname || "Unnamed Category"}
              </h2>
              <span className="text-sm text-gray-600">
                {item.tagline}
                {item.qualities.length} item
                {item.qualities.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md bg-red-700 hover:bg-red-800"
              onClick={(e) => {
                deleteCard(index, e);
              }}
            >
              <Trash className="p-1 text-white" />
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-700">{item.descrption}</p>

        <div className="flex flex-col gap-2">
          {item.qualities.map((quality, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-2 rounded-md bg-red-700/10 p-2"
            >
              <input
                type="text"
                value={quality}
                id={i}
                onChange={(e) => {
                  const updated = [...TradePro];
                  updated[index].qualities[i] = e.target.value;
                  setTradePro(updated);
                }}
                className="w-full rounded-md border border-gray-300 p-1 text-sm"
              />
              <X
                className="cursor-pointer text-gray-600 hover:text-red-800"
                onClick={() => removeQuality(index, i)}
              />
            </div>
          ))}
        </div>

        <div
          className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-md bg-red-700/20 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-700/30"
          onClick={() => {
            addQuality(index);
          }}
        >
          Add
        </div>

        <div
          className="mt-4 w-full cursor-pointer rounded-xl bg-red-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-red-700"
          onClick={() => {
            saveChanges(item);
          }}
        >
          Save
        </div>
      </div>
    ))}
</div>

    </div>
  )
}
