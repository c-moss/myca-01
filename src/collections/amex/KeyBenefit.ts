import type { CollectionConfig } from 'payload'

export const KeyBenefit: CollectionConfig = {
  slug: 'key-benefit',
  admin: {
    useAsTitle: 'benefitTitle',
    description: 'Used to define the sections of the key benefits component.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Key benefit short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the key benefit.',
      },
    },
    {
      name: 'benefitTitle',
      type: 'text',
      label: 'Benefit title',
      required: true,
    },
    {
      name: 'benefitBody',
      type: 'textarea',
      label: 'Benefit body',
      required: true,
    },
    {
      name: 'embeddedLinks',
      type: 'array',
      label: 'Embedded links',
      admin: {
        description: 'Links to be embedded in the benefit body',
      },
      fields: [
        {
          name: 'embeddedLinkText',
          type: 'text',
          label: 'Link text',
          required: true,
          admin: {
            description: 'The benefit body will be parsed to replace this text with the link.',
          },
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
