import "../types";

/**
 * @type {Product}
 */
export const DemoProduct = {
  id: 0,
  name: "No product",
  productImage: "/placeholder.jpg",
  cost_price: 0,
  selling_price: 0,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  allergen_info:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cooking_instruction:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export function sortProducts(array, key, direction) {
  const dir = direction === "desc" ? -1 : 1;
  return array.toSorted((a, b) => {
    if (Number.isFinite(+a[key])) {
      if (a[key] - b[key] > 0) return dir;
      if (a[key] - b[key] < 0) return -dir;
    } else {
      if (a[key] > b[key]) return dir;
      if (a[key] < b[key]) return -dir;
    }
    return 0;
  });
}
