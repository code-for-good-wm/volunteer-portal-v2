import type { CollectionConfig } from 'payload'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      required: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Organization',
          value: 'organization',
        },
        {
          label: 'Volunteer',
          value: 'volunteer',
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      required: false,
    },
  ],
}

export default Users
