export function CleanRoute(route) {
  if (route.endsWith("-mexico")) {
    return route.slice(0, -"-mexico".length);
  }
  return route;
}

export function CalculateCheckInCheckOut(date) {
  const actualDate = new Date(date);

  const checkIn = new Date(actualDate);
  checkIn.setDate(checkIn.getDate() - 1);

  const checkOut = new Date(actualDate);
  checkOut.setDate(checkOut.getDate() + 2);

  return {
    checkIn: checkIn.toISOString().split("T")[0],
    checkOut: checkOut.toISOString().split("T")[0],
  };
}
