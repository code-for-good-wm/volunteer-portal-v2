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
      name: 'zoom-link',
      type: 'text',
      required: false,
      admin: {
        condition: ({ data }) => data.isVirtual,
      },
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

export default Events
