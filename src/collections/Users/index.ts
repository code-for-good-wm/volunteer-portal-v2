import { admin, adminOrBoardMember } from '@/utilities/access'
import type { Access, CollectionConfig, Config, User } from 'payload'

export const adminOrBoardOrSelf: Access<User> = ({ id, req: { user } }) => {
  if (user) {
    if (user.role?.includes('admin') || user.role?.includes('board-member')) {
      return true
    }
    // TODO: is the document ID of the users collection the same as the user ID?
    return id === user.id
  }

  return false
}

const Users: CollectionConfig = {
  slug: 'users',
  auth: true, // TODO: Ultimately, this will not be an authentication-related collection
  access: {
    delete: () => false,
    read: adminOrBoardOrSelf,
    update: adminOrBoardOrSelf,
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
        {
          label: 'Board Member',
          value: 'board-member',
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
      // TODO: This needs to be required for all users with a role of organization
      // admin: {
      //   condition: ({ data }) => data.role === 'organization',
      // },
      // validate:
      //   ({ data }) =>
      //   ({ data }) =>
      //     data.role === 'organization',
    },
    {
      name: 'profile',
      type: 'relationship',
      relationTo: 'profiles',
      required: false,
      // TODO: Should this be required for all users with a role of volunteer?
    },
    {
      name: 'notes',
      label: 'Notes (admin/board member only)',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
    {
      name: 'archived',
      type: 'checkbox',
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
    {
      name: 'archived-date',
      type: 'date',
      access: {
        read: adminOrBoardMember,
        update: adminOrBoardMember,
      },
    },
  ],
}

export default Users
