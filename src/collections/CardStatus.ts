import type { CollectionConfig } from 'payload'

export const CardStatus: CollectionConfig = {
  slug: 'card-status',
  admin: {
    useAsTitle: 'card-status-name',
    description: 'Represents a card status e.g. Active, Suspended etc.',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Card status short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the card status.',
      },
    },
    {
      name: 'card-status-name',
      type: 'text',
      label: 'Card status name',
      required: true,
    },
  ],
}
