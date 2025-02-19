import type { GlobalConfig } from 'payload'

export const FeatureConfiguration: GlobalConfig = {
  slug: 'feature',
  admin: {
    description:
      'Describes a set of configurable features within the application. Features can be disabled for specific card types, product types, and card products.',
  },
  fields: [
    {
      name: 'feature',
      type: 'array',
      label: 'Feature configuration',
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'Feature short code',
          required: true,
          validate: (value: string | string[] | null | undefined) => {
            if (typeof value == 'string') {
              return /^[a-z-]+$/.test(value) || 'Only lowercase letters and hyphens are permitted'
            }
            return true
          },
          admin: {
            description: 'Short code should be a unique identifier for the feature.',
          },
        },
        {
          name: 'feature-name',
          type: 'text',
          label: 'Feature name',
          required: true,
        },
        {
          name: 'disabled-card-types',
          type: 'relationship',
          relationTo: 'card-type',
          label: 'Cards types that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabled-product-types',
          type: 'relationship',
          relationTo: 'product-type',
          label: 'Product types that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabled-card-products',
          type: 'relationship',
          relationTo: 'card-product',
          label: 'Card products that this feature is disabled for',
          hasMany: true,
        },
      ],
    },
  ],
}
