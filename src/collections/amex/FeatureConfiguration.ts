import type { GlobalConfig } from 'payload'

export const FeatureConfiguration: GlobalConfig = {
  slug: 'feature-configuration',
  admin: {
    description:
      'Describes a set of configurable features within the application. Features can be disabled for specific card types, product types, and card products.',
    group: 'Amex',
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
              return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
            }
            return true
          },
          admin: {
            description: 'Short code should be a unique identifier for the feature.',
          },
        },
        {
          name: 'featureName',
          type: 'text',
          label: 'Feature name',
          required: true,
        },
        {
          name: 'disabledCardTypes',
          type: 'relationship',
          relationTo: 'card-type',
          label: 'Cards types that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabledProductTypes',
          type: 'relationship',
          relationTo: 'product-type',
          label: 'Product types that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabledCardProducts',
          type: 'relationship',
          relationTo: 'card-product',
          label: 'Card products that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabledCardStatus',
          type: 'relationship',
          relationTo: 'card-status',
          label: 'Card statuses that this feature is disabled for',
          hasMany: true,
        },
        {
          name: 'disabledAccountStatus',
          type: 'relationship',
          relationTo: 'account-status',
          label: 'Account statuses that this feature is disabled for',
          hasMany: true,
        },
      ],
    },
  ],
}
