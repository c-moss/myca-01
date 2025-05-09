import type { CollectionConfig } from 'payload'

export const Voucher: CollectionConfig = {
  slug: 'voucher',
  admin: {
    useAsTitle: 'voucher-name',
    description: 'Represents a 3rd-party voucher product that can be purchased with Amex points.',
    group: 'Amex',
  },
  timestamps: false,
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'Voucher ID',
      required: true,
      admin: {
        description:
          'Voucher code should match the identifier specific by FVI / Voucher Management System.',
      },
    },
    {
      name: 'voucher-name',
      type: 'text',
      label: 'Voucher name',
      required: true,
      admin: {
        description:
          'Name of the voucher product. This should be the name that is displayed to the user in the app.',
      },
    },
    {
      name: 'product-description',
      type: 'textarea',
      label: 'Product description',
      required: true,
    },
    {
      name: 'delivery-details',
      type: 'textarea',
      label: 'Delivery details',
      required: true,
    },
    {
      name: 'terms-and-conditions',
      type: 'textarea',
      label: 'Terms and conditions',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'imageAssets',
      required: true,
    },
  ],
}
