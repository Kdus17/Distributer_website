import ErrorCard from "../assets/ErrorCard";
import { useState } from "react";
import {
  Clock, Mail, MessageCircle, MapPin, Phone, User2
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useLanguageContext } from "../LanguageContext";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { Lang } = useLanguageContext();

  const langopt = {
    t1: Lang ? "እኛን ያነጋግሩን" : "Contact Us",
    t2: Lang ? "ከፍተኛ ጥራት ያላቸውን የኢትዮጵያ ምርቶቻችንን ለመዳሰስ ዝግጁ ነን" : "Ready to explore our premium Ethiopian products",
    t3: Lang ? "ወይም አጠቃላይ የንግድ ሽርክናዎችን ለመወያየት?" : "or discuss comprehensive trading partnerships?",
    t4: Lang ? "የንግድ እድገታችሁን ለመደገፍ ዝግጁ ነን" : "We are ready to support your business growth",
    t5: Lang ? "ስልክ" : "Phone",
    t6: Lang ? "ሰኞ-አርብ 8AM-6PM" : "Mon-Fri 8AM-6PM",
    t7: Lang ? "የኢሜይል አድራሻ" : "Email",
    t8: Lang ? "በ24 ሰዓት ውስጥ ምላሽ እንሰጣለን" : "We respond within 24 hours",
    t9: Lang ? "አድራሻ" : "Address",
    t10: Lang ? "አዲስ አበባ፣ ኢትዮጵያ" : "Addis Ababa, Ethiopia",
    t11: Lang ? "የዓለም ሕንጻ፣ 5ኛ ፎቅ" : "Alem Building, 5th Floor",
    t12: Lang ? "በማንኛውም ጊዜ ሊጎበኙን ይችላሉ" : "Visit us anytime",
    t13: Lang ? "የሥራ ሰዓት" : "Business Hours",
    t14: Lang ? "ሰኞ- አርብ" : "Monday - Friday",
    t15: Lang ? "ከጠዋቱ 8 ሰዓት እስከ ምሽቱ 6 ሰዓት" : "8:00 AM - 6:00 PM",
    t16: Lang ? "የኢትዮጵያ ሰዓት(EAT)" : "Ethiopian Time (EAT)",
    t17: Lang ? "መልእክት ይላኩልን" : "Send Us a Message",
    t18: Lang ? "ከታች ያለውን ቅጽ ይሙሉና በተቻለ ፍጥነት ወደ እርስዎ እንመለሳለን" : "Fill out the form below and we'll get back to you as soon as possible",
    t19: Lang ? "ስም" : "First Name",
    t20: Lang ? "የአባት ስም" : "Last Name",
    t21: Lang ? "የኢሜይል አድራሻ" : "Email Address",
    t22: Lang ? "የስልክ ቁጥር" : "Phone Number",
    t23: Lang ? "መልእክት" : "Message",
    t24: Lang ? "መልእክት ላክ" : "Send Message",
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    messeage: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateform = () => {
    const newerrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.firstname.trim()) {
      newerrors.firstname = "Firstname is required!";
    }
    if (!formData.email.trim()) {
      newerrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newerrors.email = "Invalid email!";
    }
    if (!formData.messeage.trim()) {
      newerrors.messeage = "You forgot to write your message!";
    }
    setErrors(newerrors);
    return Object.keys(newerrors).length === 0;
  };

  const sub_myform = async (e) => {
    e.preventDefault();
    if (!validateform()) return;

    const formDataToSend = new FormData(e.target);
    formDataToSend.append("access_key", "9d33ba97-c068-4900-8b50-8a57c4b97cc8");

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          messeage: "",
        });
        setErrors({});
        alert("Message sent successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... your full JSX layout remains the same, but update the submit button:

  return (
    <form onSubmit={sub_myform}>
      {/* ... your layout before the button remains the same */}
      <div className="flex justify-center mt-6">
        <button
          className={`bg-red-600 w-full p-2 text-white rounded-md uppercase flex justify-center items-center gap-2 ${
            isSubmitting ? "cursor-not-allowed opacity-60" : "hover:bg-red-700"
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : langopt.t24}
        </button>
      </div>
    </form>
  );
}
