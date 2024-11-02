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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    // TODO: How do we display all events which are linked to this series?
    // {
    //   name: 'events',
    //   type: 'relationship',
    //   relationTo: 'events',
    //   hasMany: true,
    //   required: false,
    // },
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
