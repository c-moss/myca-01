import type { CollectionConfig } from 'payload'

export const CardProduct: CollectionConfig = {
  slug: 'card-product',
  admin: {
    useAsTitle: 'card-product-name',
    description: 'Represents a card product e.g. Centurion, Platinum, Gold, etc.',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'number',
      label: 'Card product id',
      required: true,
      admin: {
        description: 'Card product id should match the id used in the API.',
      },
    },
    {
      name: 'card-product-name',
      type: 'text',
      label: 'Card product name',
      required: true,
    },
  ],
}
