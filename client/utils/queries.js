/**
 * Query Strapi for nested entries and filter by slug
 * Use to get media for entries or populate relationships in response
 * 
 * @param {string} entryType The type of entry to add as relationship to the parent
 * @param {string} slug Unique slug of the entry to use for filter
 */
export const queryNestedAndFilterBySlug = (entryType, slug) => {
  return {
      params: {
        populate: entryType,
        "filters[slug][$eq]": slug,
      }
  }
}

/**
 * Query Strapi for nested media and category relationships
 * Only get entries that belong to the category
 * 
 * @param {string} entryType The type of entry to add as relationship to the parent
 * @param {string} slug Unique slug of the entry to use for filter
 */
 export const queryNestedAndFilterByCategory = (entryType, slug) => {
    return {
        params: {
          populate: entryType,
          "filters[categories][slug][$containsi]": slug,
        }
    }
  }