import React, { useEffect, useState } from "react";

// import MetaTerms from "../../components/Meta/MetaTerms";
import SkeletonText from "../../utils/skeleton/SkeletonText";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { ScrollButton, scrollToTop } from "../../utils/pageConfig/scrollToTop";

export default function TermsConditions() {
  const [htmlContent, setHtmlContent] = useState("");
  const language = localStorage.getItem("language") || "es";

  useEffect(() => {
    scrollToTop();
    const loadFromCache = async () => {
      try {
        const cache = await caches.open(`cache-tyc-${language}`);
        const response = await cache.match(`v1/views/tyc-${language}`);

        if (response) {
          const text = await response.text();
          setHtmlContent(text);
        } else {
          fetchAndCacheData();
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAndCacheData = async () => {
      try {
        const response = await axiosWithInterceptor.get(`v1/views/tyc`);
        const text = response.data.content;

        const cache = await caches.open(`cache-tyc-${language}`);
        const newResponse = new Response(text, {
          headers: { "Content-Type": "text/html" },
        });
        await cache.put(`v1/views/tyc-${language}`, newResponse);

        setHtmlContent(text);
      } catch (error) {
        console.error(error);
      }
    };

    loadFromCache();
  }, [language]);

  return (
    <>
      {/* <MetaTerms /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <ScrollButton/>

      {!htmlContent && <SkeletonText />}
    </>
  );
}
