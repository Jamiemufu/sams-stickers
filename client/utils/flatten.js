/**
 * Flatten multiple stickers
 * 
 * @param {*} arr 
 * @returns array of flattened values
 */
export function flattenStickers(arr) {
  return arr.map((item) => {
    item = item.attributes;
    item.sticker = item.sticker.data.attributes;

    return item;
  });
}

/**
 * Flatten a single sticker
 * (always as array from Strapi)
 * 
 * @param {*} arr 
 * @returns Object
 */
export function flattenSingleSticker(arr) {
  const sticker = flattenStickers(arr);

  return sticker[0];
}