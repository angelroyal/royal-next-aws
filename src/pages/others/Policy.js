import React, { useEffect, useState } from "react";

import "../../assets/styles/web/About.css";
// import MetaPolicy from "../../components/Meta/MetaPolicy";
// PENDING
import SkeletonPolicy from "../../utils/skeleton/SkeletonPolicy";
import { scrollToTop, ScrollButton } from "../../utils/pageConfig/scrollToTop";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export default function Policy() {
  const [htmlContent, setHtmlContent] = useState("");
  const language = localStorage.getItem("language") || "es";

  useEffect(() => {
    scrollToTop();
    const loadFromCache = async () => {
      try {
        const cache = await caches.open(`cache-pcc-${language}`);
        const response = await cache.match(`v1/views/pcc-${language}`);

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
        const response = await axiosWithInterceptor.get(`v1/views/pcc`);
        const text = response.data.content;

        const cache = await caches.open(`cache-pcc-${language}`);
        const newResponse = new Response(text, {
          headers: { "Content-Type": "text/html" },
        });
        await cache.put(`v1/views/pcc-${language}`, newResponse);

        setHtmlContent(text);
      } catch (error) {
        console.error(error);
      }
    };

    loadFromCache();
  }, [language]);

  // const handleScrollTop = async () => {
  //   scrollToTop();
  // };

  return (
    <>
      {/* <MetaPolicy /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <ScrollButton/>

      {!htmlContent && <SkeletonPolicy />}
    </>
  );
}
