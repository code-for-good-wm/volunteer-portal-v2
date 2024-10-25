import { addressGroup } from '@/data/collectionGroups'
import { admin } from '../../utilities/access'
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
      name: 'address',
      type: 'group',
      fields: addressGroup,
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
