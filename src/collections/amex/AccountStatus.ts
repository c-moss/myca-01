import type { CollectionConfig } from 'payload'

export const AccountStatus: CollectionConfig = {
  slug: 'account-status',
  admin: {
    useAsTitle: 'accountStatusName',
    description: 'Represents an account status e.g. Active, Suspended etc.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Account status short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:[A-Z][a-z]+)*$/.test(value) || 'Short code should be in camel case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the account status.',
      },
    },
    {
      name: 'accountStatusName',
      type: 'text',
      label: 'Account status name',
      required: true,
    },
  ],
}
