import { Edit, Plus, Search, Trash } from 'lucide-react'
import {useEffect, useState} from 'react'
import { useLanguageContext } from '../LanguageContext';
export default function CoffeeManagment({setsee2, see2, coffeprod, setCoffeprod}) {
  const [see,setsee]=useState(true)
   const {Lang,toggleLang} = useLanguageContext();
   
    const  Langopt ={
    h1: Lang ? "ኪንግደም ":"kingdom",
    h2: Lang ? "ቢዝነስ ምርቶች እና ":"Business products &",
    h3: Lang ?"አገልግሎቶች":" services",
    h4: Lang ? "ከፍተኛ ጥራት ያላቸውን የኢትዮጵያ ቡና፣ የንግድ ምርቶችን እና ሙያዊ አገልግሎቶችን ያግኙ። በተጨማሪም፣ ስለ መጪው የብና ካፌያችን ይደሰቱ!":"  Discover our comprehensive range of premium Ethiopian coffee, trading products, and professional services. Plus, get excited about our upcoming cultural cafe experience!",
    h5: Lang ? "ከግብርና ወደ ስኒ፣ ከኢትዮጵያ ወደ ዓለም... ":"   from farm to cup, from to Ethiopia to the world.",
    h6: Lang ? "ጥራት ያለው ቡና ":"premium coffee",
    h7: Lang ? "የንግድ ምርቶች. ":"trading products",
    h8: Lang ? "የብና ካፌ":"coffee house",
    h9: Lang ? "ከፍተኛ ጥራት ያለው የኢትዮጵያ ቡና ":"Premium Ethiopian Coffee",
    h10: Lang ? "በቀጥታ ከኢትዮጵያ ምርጥ የቡና ክልሎች የሚመጣው እያንዳንዱ ዝርያ ልዩ ባህሪያት እና ልዩ ጥራት አለው። ":"Sourced directly from Ethiopia finest coffee regions, each variety  offers a unique characteristics and exceptional quality",
    h11: Lang ? "የጣዕም መገለጫ":"Flavor Profile",
    h12: Lang ? "ማቀነባበር ":"processing",
    h13: Lang ? "ከፍታ":"Altitude",
    h14: Lang ? "ጥራት ያለው ":"Quality",
    h15: Lang ? "የላቀ የኤክስፖርት ጥራት":"Premium Export Quality",
    h16: Lang ? "ከቡና ወደ ስኒ ግሩምነት ":"From Bean To Cup Exellence",
    h17: Lang ? "የእኛ ጥንቃቄ የተሞላበት ሂደት እያንዳንዱ የቡና ፍሬ ከፍተኛውን ዓለም አቀፍ መስፈርት የሚያሟላ መሆኑን ያረጋግጣል።":"Our meticulous process ensures every coffee bean meets the highest international standards",
    h18: Lang ? "ምንጮች":"sourcing",
    h19: Lang ? "ከገበሬዎች ጋር ቀጥተኛ ግንኙነት ማድረግ ":"direct contact with farmers",
    h20: Lang ? "የጥራት ቊጥጥር":"   Quality control",
    h21: Lang ? "ጥብቅ የጥራት ቊጥጥር":"  Rigorous quality control",
    h22: Lang ? "ማቀነባበር ":"processing",
    h23: Lang ? "የኤክስፖርት ማቀነባበሪያ እና የምግብ ማሸጊ ":"export processing and food packaging ",
    h24: Lang ? "ወደ ውጭ መላክ ":"export",
    h25: Lang ? "ዓለም አቀፍ የስርጭት አውታረ መረብ":"Global distribution network",
    h26: Lang ? "የኪንግደም ሀውስ ቡና ":"Kingdom house coffee",
    h27: Lang ? "በቀጣዩ ቡና ቤታችን ውስጥ እውነተኛውን የኢትዮጵያ ቡና ባህል ይለማመዱ። ከባህላዊ የቡና ሥነ ሥርዓቶች እስከ ዘመናዊ የመጠጥ ቴክኒኮች ድረስ የበለጸገውን የኢትዮጵያ ቡና ቅርስ ከጣፋጭ ባህላዊ ምግብ ጐን ለጐን እናሳያለን።":" Experience the authentic Ethiopian coffee culture in our upcoming cafe. From traditional coffee ceremonies to modern brewing techniques, we'll showcase the rich heritage of Ethiopian coffee alongside delicious traditional cuisine.",
    h28: Lang ? "የመክፈቻ ቀን":"opening day",
    h29: Lang ? "2025፣ መስከረም 9":"2025, september 9",
    h30: Lang ? "ቦታው":"Location",
    h31: Lang ? "ጌርጂ፣ አዲስ አበባ":"gerji,Addis Abeba",
    h32: Lang ? "እውነተኛ የኢትዮጵያ ቡና":"Authentic Ethiopian coffee",
    h33: Lang ? "ባህላዊ የቡና ሥነ-ሥርዓቶች እና ከፍተኛ ጥራት ያላቸው የአንድ ምንጭ ቡናዎች።":"traditional coffee ceremonies and premium single-origin brews",
    h34: Lang ? "የኢትዮጵያ ኵሲን።":"Ethiopian  Cuisine",
    h35: Lang ? "የኢትዮጵያን የበለጸገ የምግብ አዘገጃጀት ቅርስ የሚያሳዩ እውነተኛ ምግቦች":"Authentic dishes showcasing  Ethiopia's rich culinary heritage",
    h36: Lang ? "የባህል ተሞክሮ":"Cultural Experience ",
    h37: Lang ? "የኢትዮጵያን ባህል እና ወግ የሚያከብር ሁለንተናዊ አካባቢ። ":"  Immersive environment celebrating Ethiopian culture and traditio",
    h38: Lang ? "የንግድ ማዕከል.":"Business Hub",
    h39: Lang ? "ለስብሰባ፣ ለሥራ እና ለግንኙነት ዘመናዊ መገልገያዎች":" Modern amenities for meeting, work and networking",
    h40: Lang ? "መዝናኛ":"Entertainment",
    h41: Lang ? "ፊልሞች፣ ትርዒቶች፣ ዜናዎች እና ሌሎች የመዝናኛ ዓይነቶች።":"  Movies, shows, news and other form of Entertainment",
    h42: Lang ? "የጋራ ቦታ":"Community Space",
    h43: Lang ? " የቡና አፍቃሪዎችን እና የባህል አድናቂዎችን አንድ ላይ ማሰባሰብ።":"Bringing together coffee lovers and cultural  enthusiasts",
    h44: Lang ? "እንደተዘመኑ ይቈዩ":"Stay Updated",
    h45: Lang ? "ስለ ቡና ቤታችን መክፈቻ፣ ልዩ ዝግጅቶች እና ብቸኛ መረጃዎች በቅድሚያ ያግኙ።":"   Be first to  know about our cafe opening, special events and exclusive ",
    h46: Lang ? "አሳውቀኝ. ":"notify me",
    h47: Lang ? "ከእኛ ጋር ለመተባበር ዝግጁ ነዎት?":"Ready to Partner with us?",
    h48: Lang ? "ከፍተኛ ጥራት ባለው ቡናችን፣ በንግድ ምርቶቻችን፣ በሙያዊ አገልግሎቶቻችን ወይም በመጪው ቡና ቤታችን ላይ ፍላጐት ቢኖርዎት፣ በዓለም ዙሪያ ያሉ ማህበረሰቦችን እና ገበያዎችን የሚጠቅሙ ዘላቂ ሽርክናዎችን ለመገንባት እዚህ ነን. ":"Whether you're interested in our premium coffee, trading products, professional services, or excited about our upcoming cafe, we're here to build lasting partnerships that benefit communities and markets worldwide.",
    h49: Lang ? "የምርት ካታሎግ ይጠይቁ.":"Request product Catalogue",
    h50: Lang ? "የቀን መቁጠሪያ":"Schedule Consultation",
    }


  useEffect(() => {
    const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:4000/local/products');
      const data = await res.json();
      setCoffeprod(Array.isArray(data.products) ? data.products : [])
      console.log(data)
    } catch (err) {
      console.error('❌ Fetch error:', err);
    }
  };
  fetchData();
}, []);


  const roma = (e)=>{
    e.preventDefault() // ✅ correct
    console.log(e.Target.value)
  }
  
const r = (index, field, value) => {
  const updated = [...coffeprod];
  updated[index][field] = value; 
  setCoffeprod(updated);
};

const updateCard = async (index) => {
  const product = coffeprod[index];
  try {
    const res = await fetch(`http://localhost:4000/local/products/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    if (!res.ok) throw new Error("Update failed");
    alert("Product updated successfully");
  } catch (err) {
    console.error(err);
    alert("Update failed");
  }
};




const deleteCard =async (index,e)=>{
  e.stopPropagation(); 
  const todelete = coffeprod[index]
  try{
    const del = await fetch(`http://localhost:4000/local/products/${todelete._id}`,{
      method: "DELETE"
    })
    if (!del.ok) throw new Error('Failed to delete');
    const updated = coffeprod.filter((_, i) => i !== index);
    setCoffeprod(updated);
    alert("deleted succesfully")
  } catch (err) {
    console.log(err)
    alert("failed")
  }
}

 const [activeOverlay, setActiveOverlay] = useState(null);
  return (
    <>
      

    <div className='flex flex-col px-24 py-5 min-h-screen'>
      
      {/**Head */}
      <div className='flex justify-between py-4'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold '>Coffee Products Managment</h1>
          <p className='text-gray-600'>Manage your premium Ethiopian coffee product catalog</p>
        </div>
        <div className='flex items-center'>
          <div className='bg-red-600 text-white cursor-pointer hover:bg-red-800 rounded-xl py-3 px-4 flex gap-4' onClick={()=>setsee2(!see2)}>
            <Plus/>
            Add new coffee
          </div>
        </div>
      </div>
      <form  onSubmit={roma}>
 <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {Array.isArray(coffeprod) && coffeprod.map((coffee, key) => (
        <div
          key={key}
          className="flex flex-col rounded-2xl overflow-hidden max-w-[600px] bg-white mb-2 shadow-lg border border-red-400 pb-4 hover:scale-102 transition-all duration-400 ease-in-out dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-800"
        >
          <div
            onClick={() => setActiveOverlay(key)}
            style={{ backgroundImage: `url(${coffee.image})` }}
            className="bg-cover h-[200px] relative cursor-pointer"
          >
            <input value={coffee.grade} className="bg-yellow-400 px-1 py-0.5 rounded-full mt-3 mr-4 absolute top-0 right-0"
                onChange={(e) => r(key, 'grade', e.target.value)}
                onClick={(e) => (e.stopPropagation())}
                type='text'
            />
             
<button type='button' className='absolute top-2 left-13 border-1 bg-red-500 p-1 rounded-full text-white'
                onClick={(e)=>deleteCard(key,e)}
                >
            <Trash className='p-1'/>
          </button>

            {/* OVERLAY */}
            {activeOverlay === key && (
              <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on input
                className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-10"
              >
                 <input
                type="text"
                value={coffee.image}
                onChange={(e) => r(key, 'image', e.target.value)}
                  className="bg-white p-2 rounded-md w-2/3"
                />
                <button
                  onClick={() => setActiveOverlay(null)}
                  className="absolute top-2 right-2 text-white"
                >
                  ✖
                </button>
              </div>
            )}

            <p className="flex flex-col gap-1 absolute bottom-0 left-0 pb-2 pl-5 text-white">
              <input
                type="text"
                value={coffee.productname}
                 onClick={(e) => (e.stopPropagation())}
                onChange={(e) => r(key, 'productname', e.target.value)}

              />
              <input
                type="text"
                value={coffee.origin}
                 onClick={(e) => (e.stopPropagation())}
                onChange={(e) => r(key, 'origin', e.target.value)}
              />
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 dark:text-gray-300">
            <textarea
              type="text"
              value={coffee.descrption}
              onChange={(e) => r(key, 'descrption', e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 dark:text-white">{Langopt.h11}</span>
                <input
                  type="text"
                  value={coffee.profile}
                  onChange={(e) => r(key, 'profile', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 dark:text-white">{Langopt.h12}</span>
                <input
                  type="text"
                  value={coffee.processing}
                  onChange={(e) => r(key, 'processing', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 dark:text-white">{Langopt.h13}</span>
                <input
                  type="text"
                  value={coffee.altitude}
                  onChange={(e) => r(key, 'altitude', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-500 dark:text-white">{Langopt.h14}</span>
                <span className="text-red-500">{Langopt.h15}</span>
                <button  onClick={() => updateCard(key)}>submit</button>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
          </form>
      {/**Cards */}
    </div>
    </>
  )
}
