import type { CollectionConfig } from 'payload'

export const ImageAssets: CollectionConfig = {
  slug: 'imageAssets',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    description: 'A single image asset that can be used in various places throughout the app.',
  },
  timestamps: false,
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 50,
        height: 50,
        position: 'centre',
      },
      {
        name: 'tile',
        width: 150,
        height: 150,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'imageAltText',
      type: 'text',
      label: 'Image Alt Text',
      required: true,
    },
  ],
}
