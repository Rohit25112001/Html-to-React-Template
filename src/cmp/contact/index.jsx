import ContactSection from "../shared/contact-section";
import { useEffect } from "react";
const Contact=()=>{
    //importing custom.js on window load
    useEffect(()=>{
        const script = document.createElement('script');
        script.src = '/js/custom.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    },[]);
    return(
        <ContactSection/>
    );
};
export default Contact;