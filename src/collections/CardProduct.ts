import type { CollectionConfig } from 'payload'

export const CardProduct: CollectionConfig = {
  slug: 'card-product',
  admin: {
    useAsTitle: 'card-product-name',
  },
  fields: [
    {
      name: 'card-product-name',
      type: 'text',
      label: 'Card product name',
      required: true,
    },
    {
      name: 'card-product-id',
      type: 'text',
      label: 'Card product id',
      required: true,
    },
  ],
}
