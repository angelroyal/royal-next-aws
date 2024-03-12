import { useEffect } from 'react'

export const GetIconActivation = (pathname, setCurrentActiveIcon) => {
  const getRoutes = (route) => {
    const match = route.match(/\/([^/]+)$/);
    return match ? match[1] : '';
  }

  let route = getRoutes(pathname);

  const getCurrentActivationIcon = (path) => {
    if (path === '' || path === 'tour' || path === 'transportation') {
      setCurrentActiveIcon(path);
    }
  }

   // UPDATE STATUS ICON
   useEffect(() => {
    getCurrentActivationIcon(route);
  }, [pathname]);
}
