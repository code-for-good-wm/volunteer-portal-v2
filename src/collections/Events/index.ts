import { admin } from '@/access/admin'
import type { CollectionConfig } from 'payload'

const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
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
  ],
}

export default Events
