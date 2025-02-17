import { CollectionConfig } from 'payload'

const ImageAssets: CollectionConfig = {
  slug: 'imageAssets',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'tile',
        width: 150,
        height: 150,
        position: 'centre',
      },
    ],
    adminThumbnail: 'tile',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'imageAltText',
      type: 'text',
    },
  ],
}

export default ImageAssets
