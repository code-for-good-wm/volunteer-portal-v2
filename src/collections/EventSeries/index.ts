import { admin } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const EventSeries: CollectionConfig = {
  slug: 'event-series',
  access: {
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
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
    },
  ],
}

export default EventSeries
