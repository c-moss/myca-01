import type { CollectionConfig, TextFieldSingleValidation } from 'payload'

export const Feature: CollectionConfig = {
  slug: 'feature',
  admin: {
    useAsTitle: 'feature-name',
    description:
      'Describes a configurable feature within the application. Features are used to enable or disable functionality within the app.',
  },
  fields: [
    {
      name: 'feature-code',
      type: 'text',
      label: 'Feature shortcode',
      required: true,
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
}
