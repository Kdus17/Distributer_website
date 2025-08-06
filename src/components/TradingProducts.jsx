import { Box, Cross, Pencil, Plus, Trash, X } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

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


const handleImageChange = (e, index) => {
  const file = e.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please select a valid image file');
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    const updated = [...TradePro];
    updated[index].image = reader.result; // base64 string
    setTradePro(updated);
  };
  reader.readAsDataURL(file);
};


const saveChanges = async (product) => {
  console.log('✅', product);
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
              className="flex flex-col rounded-2xl border border-red-300 shadow-sm overflow-hidden bg-white"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.productname || "Product Image"}
                  className="w-full h-48 object-cover"
                />
                {/* Delete Button top-left */}
                <button
                  className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={(e) => deleteCard(index, e)}
                >
                  <Trash className="w-4 h-4" />
                </button>
                {/* Grade label top-right */}
                <label name="img" className="absolute top-3 right-3 rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black">
                  Change image
                  <input type="file" name="img" id="" className='hidden' onChange={(e) => handleImageChange(e, index)} />
                </label>
                <p className="absolute bottom-0 left-0 ml-3 mb-3 flex flex-col gap-2 items-start text-white drop-shadow-md">
                  <input type='text' className="text-2xl font-bold" value={item.productname} onChange={(e) => {
                          const updated = [...TradePro];
                          updated[index].productname = e.target.value;
                          setTradePro(updated);
                        }}
                  />
                  <span className="font-stretch-semi-condensedbold">
                      {item.tagline}
                  </span>
                </p>
                
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4">


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
            </div>
          ))}
      </div>

    </div>
  )
}
