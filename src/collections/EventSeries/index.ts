import { admin } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const EventSeries: CollectionConfig = {
  slug: 'event-series',
  access: {
    create: admin,
    update: admin,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'event',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'New Event Series',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'notes',
      label: 'Notes (admin only)',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
  ],
}

export default EventSeries
