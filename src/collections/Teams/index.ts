import type { CollectionConfig } from 'payload'
import { admin } from '@/utilities/access'

const Teams: CollectionConfig = {
  slug: 'teams',
  access: {
    create: admin,
    update: admin,
    delete: () => false,
  },
  fields: [
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'roles',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'role',
          type: 'text',
        },
      ],
      required: true,
      access: {
        read: admin,
      },
    },
    {
      name: 'team-lead',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      //TODO: Validate: the team leads must be members of the team
      //TODO: filterOptions? tbd
    },
    {
      name: 'team-members',
      type: 'array',
      fields: [
        {
          name: 'volunteer',
          type: 'relationship',
          relationTo: 'users',
          required: true,
          unique: true,
          //TODO: fix unique - cannot have the same user twice
          //TODO: fix validate - role of the user must be volunteer
          //TODO: validate: (val, {data}) => data.role === 'volunteer' && data.teamMembers,
        },
        {
          name: 'role-name',
          type: 'array',
          fields: [],
          access: {
            read: admin,
          },
          //TODO: pull from roles within this file if possible.
        },
      ],
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

export default Teams
