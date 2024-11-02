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
      type: 'relationship',
      relationTo: 'team-roles',
      hasMany: true,
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
          unique: true,
          filterOptions: () => {
            return {
              role: { equals: 'volunteer' },
            }
          },
          // NOTE: The intention here is to have a complete list of team members including team leads
          //TODO: fix unique - cannot have the same user twice
        },
        {
          name: 'role',
          type: 'relationship',
          relationTo: 'team-roles',
          hasMany: true,
          required: true,
          // TODO: In a perfect world, we would like to filter the roles
          // based on the roles selected for this team, perhaps using filterOptions
          access: {
            read: admin,
          },
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
