import type { CollectionConfig } from 'payload'

export const ProductType: CollectionConfig = {
  slug: 'product-type',
  admin: {
    useAsTitle: 'product-type-name',
    description: 'Represents a product type e.g. Lending, Charge, Corporate, etc.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Product type short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the product type.',
      },
    },
    {
      name: 'product-type-name',
      type: 'text',
      label: 'Product type name',
      required: true,
    },
  ],
}
