import moment from "moment";

export function getNextMonth() {
  const nextMonth = moment().add(1, "M").format("YYYY-MM-DD");
  return nextMonth;
}
