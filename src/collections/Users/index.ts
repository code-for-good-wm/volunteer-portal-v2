import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isAdminOrSelf } from '../../access/adminOrSelf'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    admin: isAdminOrSelf,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
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
