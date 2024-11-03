import { addressGroup } from '@/data/collectionGroups'
import { adminOrBoardMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const EventLocations: CollectionConfig = {
  slug: 'event-locations',
  access: {
    read: () => true,
    create: adminOrBoardMember,
    update: adminOrBoardMember,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'New Event Location',
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
      label: 'Notes (admin/board member only)',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
      },
    },
    {
      name: 'archived',
      type: 'checkbox',
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
  ],
}

export default EventLocations
