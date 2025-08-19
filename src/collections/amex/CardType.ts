import type { CollectionConfig } from 'payload'

export const CardType: CollectionConfig = {
  slug: 'card-type',
  admin: {
    useAsTitle: 'cardTypeName',
    description: 'Represents a card type e.g. Primary or Supplementary.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Card type short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the card type.',
      },
    },
    {
      name: 'cardTypeName',
      type: 'text',
      label: 'Card type name',
      required: true,
    },
  ],
}
