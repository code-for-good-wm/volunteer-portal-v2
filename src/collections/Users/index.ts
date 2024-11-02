import { admin } from '@/utilities/access'
import type { Access, CollectionConfig, User } from 'payload'

export const isAdminOrSelf: Access<User> = ({ id, req: { user } }) => {
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
    delete: isAdminOrSelf,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      maxLength: 35,
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
      access: {
        update: admin,
      },
    },
    // TODO: what about email and phone number?  Phone might be better saved in the profile.
    // But email is used for authentication, yes?  How do we add it to this collection from the authentication system?
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
