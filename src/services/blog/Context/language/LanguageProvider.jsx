import { useState, useEffect } from "react";

export default function LanguageProvider() {

    const [language, setLanguage] = useState('EN');
   
    // USE EFFECT TO CONTROL CHANGES IN DROPDOWN
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    //FUNCTION TO LISTEN USER SELECTION
    const handleSelectChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
        window.location.reload()
    };

    return (
        <>
            <div>
                <select id="language-select" value={language} onChange={handleSelectChange}>
                    <option value="EN">English</option>
                    <option value="ES">Español</option>
                </select>
            </div>
        </>
    );
};