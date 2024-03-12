import { round } from "lodash";

export function truncateText(text, words) {
  return text.split(' ').splice(0, words).join(' ');
}

export function transformDistance(meters) {
  return meters < 1000 ? `${meters} mts` : `${round((meters / 1000), 2)} kms`;
}