import type { CollectionConfig } from 'payload'

export const ProductType: CollectionConfig = {
  slug: 'product-type',
  admin: {
    useAsTitle: 'product-type-description',
    description: 'Represents a product type e.g. Lending, Charge, Corporate, etc.',
  },
  timestamps: false,
  fields: [
    {
      name: 'product-type-name',
      type: 'text',
      label: 'Product type name',
      required: true,
    },
    {
      name: 'product-type-description',
      type: 'text',
      label: 'Product type description',
      required: true,
    },
  ],
}
