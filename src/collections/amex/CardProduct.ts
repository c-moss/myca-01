import type { CollectionConfig } from 'payload'

export const CardProduct: CollectionConfig = {
  slug: 'card-product',
  admin: {
    useAsTitle: 'cardProductName',
    description: 'Represents a card product e.g. Centurion, Platinum, Gold, etc.',
    group: 'Amex',
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
      name: 'cardProductName',
      type: 'text',
      label: 'Card product name',
      required: true,
    },
  ],
}
