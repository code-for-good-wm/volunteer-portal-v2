import { admin } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Events: CollectionConfig = {
  slug: 'events',
  access: {
    create: admin,
    update: admin,
    delete: () => false,
  },
  fields: [
    {
      name: 'event-series',
      type: 'relationship',
      relationTo: 'event-series',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
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
      name: 'admin-notes',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
  ],
}

export default Events
