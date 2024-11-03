import { adminOrBoardMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Events: CollectionConfig = {
  slug: 'events',
  access: {
    create: adminOrBoardMember,
    update: adminOrBoardMember,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      required: false,
      hasMany: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'New Event',
    },
    {
      name: 'start-date',
      type: 'date',
      required: true,
    },
    {
      name: 'end-date',
      type: 'date',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'event-locations',
      required: false,
    },
    {
      name: 'is-virtual',
      type: 'checkbox',
      required: false,
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

export default Events
