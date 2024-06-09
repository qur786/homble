/**
 * {
 *  "name": "Masala Chai Tea Bags",
 *  "id": "1",
 *  "description": "Rich Indian tea with a blend of aromatic spices",
 *  "allergen_info": "Contains no known allergens",
 *  "cooking_instruction": "Steep in hot water for 4 minutes",
 *  "cost_price": 50,
 *  "selling_price": 75,
 *  "productImage": "https://myjaxy-prod.s3.amazonaws.com/1688562159ABCChai_Masaldeta.jpg"
 * }
 *
 * @typedef {object} Product
 * @property {string} name
 * @property {string} id
 * @property {string} description
 * @property {number} cost_price
 * @property {number} selling_price
 * @property {string} allergen_info
 * @property {string} cooking_instruction
 * @property {string} productImage
 */

/**
 * @callback ShowModal
 * @return   {void}
 *
 * @callback CloseModal
 * @return   {void}
 *
 * @typedef {object} ProductModalProps
 * @property {boolean} open
 * @property {ShowModal} showModal
 * @property {CloseModal} closeModal
 */

/**
 * @callback OnSubmit
 * @return {void}
 *
 * @typedef {object} NewProductFormProps
 * @property {OnSubmit|undefined} onSubmit
 */
