import { createContext,useContext,useState,useEffect } from "react";

const LightContext = createContext();

export const useLightcontext = () => useContext(LightContext);

export const LightProvider = ({children}) => {
    const[light,setLight] = useState(false);
const togglelight=()=>{
    setLight(!light);
}
useEffect(()=>{
let y = localStorage.getItem("light");
if(y){
    setLight(JSON.parse(y));
}
},[])
    useEffect(() => {
        if(light){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");}
            },[light]);
            useEffect(() => {
  localStorage.setItem("light", JSON.stringify(light));
}, [light]);

return (
  <LightContext.Provider value={{ light, togglelight }}>
      {children}
    </LightContext.Provider>
)
}