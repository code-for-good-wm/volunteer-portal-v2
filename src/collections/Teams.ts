import type { CollectionConfig } from 'payload'

const Teams: CollectionConfig = {
  slug: 'teams',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

export default Teams
