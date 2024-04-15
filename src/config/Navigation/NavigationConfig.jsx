import { useEffect, useState } from "react";

export const NavigationURL = ["hotels", "tour"];

export function NavigationConfig() {
  const [activeRouter, setActiveRouter] = useState(null);
  
  useEffect(() => {
    const path = window.location.pathname;

    let actualRouter = null;
    let pathRouter = path.split("/");
    // console.log(pathRouter);
    NavigationURL.map((url, index) => {
      if (pathRouter.includes(url)) {
        // console.log("entra");
        actualRouter = pathRouter.filter((value) => value === url);
      }
    });

    // console.log(actualRouter);

    if (path === "/") {
      setActiveRouter("hotels");
    }

    if (actualRouter != null) {
      setActiveRouter(actualRouter[0]);
    }
  }, []);

  return activeRouter;
}
