import { TrendingItem } from "./TrendingItemList";

export function splitArrayInHalf(originalArray: Array<TrendingItem>) {
    const halfLength = Math.ceil(originalArray.length / 2);
    const firstHalf = originalArray.slice(0, halfLength);
    const secondHalf = originalArray.slice(halfLength);
    return [firstHalf, secondHalf];
  }