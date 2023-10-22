import FeatureSection from "./feature-section";
import AboutSection from "../shared/about-section"
import ProfessionalSection from "./professional-section";
import ServiceSection from "../shared/service-section";
import ClientSection from "./client-section";
import ContactSection from "../shared/contact-section";
import { useEffect } from "react";
const Home=()=>{
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
        <> 
            <FeatureSection/>
            <AboutSection/>
            <ProfessionalSection/>
            <ServiceSection/>
            <ClientSection/>
            <ContactSection/>
        </>
        
    );
};
export default Home;