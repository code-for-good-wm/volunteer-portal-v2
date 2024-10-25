import type { Access, CollectionConfig, User } from 'payload'

export const isAdminOrSelf: Access<User> = ({ id, req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (user.role?.includes('admin')) {
      return true
    }
    // If any other type of user, only provide access to themselves
    // TODO: is the document ID of the users collection the same as the user ID?
    return id === user.id
  }
  // Reject everyone else
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
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      // TODO: min / max length?
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
