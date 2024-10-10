"use client";

import { useEffect, useState } from 'react';

export default function TableReviews({ TableBlog }) {
    const [currentLanguage, setCurrentLanguage] = useState('ES'); // Idioma predeterminado

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const language = localStorage.getItem('language');
            if (language) {
                setCurrentLanguage(language);
            }
        }
    }, []);

    return (
        <>
            <div>
                {currentLanguage === "EN" && <h3 className="text-fs-20 my-4 m-b">Reviews and host comments</h3>}
                {currentLanguage === "ES" && <h3 className="text-fs-20 my-4 m-b">Reseñas y opiniones de los huéspedes</h3>}
            </div>
            <table className="table-auto w-full border-2 border-black mb-4">
                <thead>
                    <tr>
                        {currentLanguage === "ES" && <th className="border-2 border-black p-2">Usuario</th>}
                        {currentLanguage === "ES" && <th className="border-2 border-black p-2">Fecha</th>}
                        {currentLanguage === "ES" && <th className="border-2 border-black p-2">Puntuación</th>}
                        {currentLanguage === "ES" && <th className="border-2 border-black p-2">Resumen</th>}
                        {currentLanguage === "EN" && <th className="border-2 border-black p-2">User</th>}
                        {currentLanguage === "EN" && <th className="border-2 border-black p-2">Date</th>}
                        {currentLanguage === "EN" && <th className="border-2 border-black p-2">Rating</th>}
                        {currentLanguage === "EN" && <th className="border-2 border-black p-2">Summary</th>}
                    </tr>
                </thead>
                <tbody>
                    {TableBlog.users.map((user, index) => (
                        <tr key={index}>
                            <td className="border-2 border-black p-2">{user}</td>
                            <td className="border-2 border-black p-2">{TableBlog.date[index]}</td>
                            <td className="border-2 border-black p-2 text-center">{TableBlog.score[index]}</td>
                            <td className="border-2 border-black p-2">{TableBlog.summary[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
