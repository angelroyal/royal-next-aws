import { useEffect, useState } from "react";

export const NavigationURL = {
  hotel: ["/", "/hotel/result"],
  tour: ["/tour", "tour/result"],
};

export function NavigationConfig() {

    const [activeTab, setActiveTab] = useState("hotel");
  useEffect(() => {
    const path = window.location.pathname;
    // console.log(typeof path);
    let actualRouter = null
    Object.entries(NavigationURL).map((route, index) => {
        if(route[1].includes(path)){
            actualRouter = route[1].filter(value=> value === path);
        }
    });
    // console.log(actualRouter);
    if(actualRouter != null){
        if(actualRouter[0] != "/"){
            setActiveTab(actualRouter[0])
        }
    }
  }, []);

  return activeTab;
}
