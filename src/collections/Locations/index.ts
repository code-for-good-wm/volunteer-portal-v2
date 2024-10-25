import { admin } from '@/access/admin'
import stateOptions from '@/data/stateOptions'
import type { CollectionConfig } from 'payload'

const Locations: CollectionConfig = {
  slug: 'locations',
  access: {
    read: () => true,
    create: admin,
    update: admin,
    delete: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'address-line1',
      type: 'text',
      required: true,
    },
    {
      name: 'address-line2',
      type: 'text',
      required: false,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      type: 'select',
      options: stateOptions,
      required: true,
    },
    {
      name: 'postal-code',
      type: 'text',
      required: true,
    },
    {
      name: 'admin-notes',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
  ],
}

export default Locations
