import type { CollectionConfig } from 'payload'

export const Link: CollectionConfig = {
  slug: 'link',
  admin: {
    useAsTitle: 'link-label',
    description:
      'Defines a link in the MYCA app. Links can be nested to create a hierarchy of links. Each link can have a label, URL, and an arbitrary number of child links.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Link short code',
      required: true,
      validate: (value: string | string[] | null | undefined) => {
        if (typeof value == 'string') {
          return /^[a-z]+(?:-[a-z]+)*$/.test(value) || 'Short code should be in kebab case'
        }
        return true
      },
      admin: {
        description: 'Short code should be a unique identifier for the link.',
      },
    },
    {
      name: 'link-label',
      type: 'text',
      label: 'Link label',
      required: true,
    },
    { name: 'url', type: 'text', label: 'Link URL', required: false },
    {
      name: 'child-links',
      type: 'relationship',
      relationTo: 'link',
      label: 'Child links',
      hasMany: true,
    },
  ],
}
