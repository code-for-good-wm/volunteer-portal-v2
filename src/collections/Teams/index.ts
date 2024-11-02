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
      label: 'Project',
      type: 'relationship',
      relationTo: 'projects',
      required: true,
    },
    {
      name: 'roles',
      type: 'array',
      fields: [
        {
          name: 'description',
          label: 'Role Description',
          type: 'text',
          required: true,
        },
        {
          name: 'notes',
          label: 'Notes',
          type: 'text',
          required: false,
        },
      ],
      required: true,
      access: {
        read: admin,
      },
    },
    {
      name: 'team-lead',
      label: 'Team Lead(s)',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      required: true,
      //TODO: Validate: the team leads must be members of the team
      //TODO: filterOptions? tbd
    },
    {
      // NOTE: The intention here is to have a complete list of team members including team leads
      name: 'team-members',
      type: 'array',
      fields: [
        {
          name: 'volunteer',
          type: 'relationship',
          relationTo: 'users',
          filterOptions: () => {
            return {
              // TODO: Also filter out any previously selected volunteers
              // You shouldn't be able to add the same volunteer twice)
              role: { equals: 'volunteer' },
            }
          },
        },
        {
          name: 'role',
          type: 'text',
          required: true,
          // TODO: In a perfect world, we could pick from the roles added
          // to the roles array above
          access: {
            read: admin,
          },
        },
      ],
    },
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

export default Teams
