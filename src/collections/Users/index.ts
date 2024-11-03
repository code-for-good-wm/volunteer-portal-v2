import { admin } from '@/utilities/access'
import type { Access, CollectionConfig, Config, User } from 'payload'

export const adminOrSelf: Access<User> = ({ id, req: { user } }) => {
  if (user) {
    if (user.role?.includes('admin')) {
      return true
    }
    // TODO: is the document ID of the users collection the same as the user ID?
    return id === user.id
  }

  return false
}

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: adminOrSelf,
    read: adminOrSelf,
    update: adminOrSelf,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      // Unique identifier from authentication system
      name: 'authId',
      type: 'text',
      required: true,
      unique: true,
      access: {
        read: () => false,
        update: () => false,
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 35,
      defaultValue: 'New User',
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
        // TODO: There may be a use case for a non-admin CFG board member role
      ],
      access: {
        update: admin,
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
    },
    {
      name: 'organization',
      type: 'relationship',
      relationTo: 'organizations',
      required: false,
      // admin: {
      //   condition: ({ data }) => data.role === 'organization',
      // },
      // validate:
      //   ({ data }) =>
      //   ({ data }) =>
      //     data.role === 'organization',
    },
    {
      name: 'notes',
      label: 'Notes (admin only)',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
        update: admin,
      },
    },
  ],
}

export default Users
