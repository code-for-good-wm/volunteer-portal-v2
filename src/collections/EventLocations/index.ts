import { addressGroup } from '@/data/collectionGroups'
import { admin } from '../../utilities/access'
import stateOptions from '@/data/stateOptions'
import type { CollectionConfig } from 'payload'

const EventLocations: CollectionConfig = {
  slug: 'event-locations',
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
      name: 'notes',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
  ],
}

export default EventLocations
