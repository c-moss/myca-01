import type { CollectionConfig } from 'payload'

export const CardProduct: CollectionConfig = {
  slug: 'card-product',
  admin: {
    useAsTitle: 'card-product-name',
    description:
      'Represents a card product e.g. Centurion, Platinum, Gold, etc. Card product id should match the id used in the API.',
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
