import type { CollectionConfig } from 'payload'

export const ProductType: CollectionConfig = {
  slug: 'product-type',
  admin: {
    useAsTitle: 'product-type-name',
    description:
      'Represents a product type e.g. Lending, Charge, Corporate, etc. Short code should be a unique identifier for the product type.',
  },
  timestamps: false,
  fields: [
    {
      name: 'product-type-code',
      type: 'text',
      label: 'Product type short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z-]+$/.test(value) || 'Only lowercase letters and hyphens are permitted'
        }
        return true
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
