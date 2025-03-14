import type { CollectionConfig } from 'payload'

export const TermsAndConditions: CollectionConfig = {
  slug: 'terms-and-conditions',
  admin: {
    useAsTitle: 'name',
    description: 'Represents a Terms and Conditions for a specific feature.',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Terms and conditions type',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Type should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Type should be a unique identifier for the set of terms and conditions.',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Terms and conditions name',
      required: true,
    },
    {
      name: 'text',
      type: 'textarea',
      label: 'Terms and conditions text',
      required: true,
    },
    {
      name: 'link-items',
      type: 'array',
      label: 'Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Link label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
      ],
    },
  ],
}
