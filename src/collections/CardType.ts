import type { CollectionConfig } from 'payload'

export const CardType: CollectionConfig = {
  slug: 'card-type',
  admin: {
    useAsTitle: 'card-type-name',
    description: 'Represents a card type e.g. Primary or Supplementary.',
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
          return /^[a-z-]+$/.test(value) || 'Only lowercase letters and hyphens are permitted'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the card type.',
      },
    },
    {
      name: 'card-type-name',
      type: 'text',
      label: 'Card type name',
      required: true,
    },
  ],
}
