import type { CollectionConfig } from 'payload'

export const TermsAndConditions: CollectionConfig = {
  slug: 'terms-and-conditions',
  admin: {
    useAsTitle: 'tnc-name',
    description: 'Represents a Terms and Conditions for a specific feature.',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Terms and conditions short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description:
          'Short code should be a unique identifier for the set of terms and conditions.',
      },
    },
    {
      name: 'tnc-name',
      type: 'text',
      label: 'Terms and conditions name',
      required: true,
    },
    {
      name: 'tnc-body',
      type: 'richText',
      label: 'Terms and conditions body',
      required: true,
    },
    {
      name: 'tnc-links',
      type: 'array',
      label: 'Links',
      fields: [
        {
          name: 'link-label',
          type: 'text',
          label: 'Link label',
          required: true,
        },
        {
          name: 'link-url',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
      ],
    },
  ],
}
