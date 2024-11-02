import swagSizes from '@/data/swagSizes'
import { admin } from '@/utilities/access'
import type { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: admin,
    update: admin,
    delete: () => false,
  },
  fields: [
    {
      name: 'organizations',
      type: 'relationship',
      relationTo: 'organizations',
      required: true,
    },
    {
      name: 'events',
      type: 'relationship',
      relationTo: 'events',
      required: false,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'project-size',
      type: 'select',
      options: swagSizes,
      required: false,
      access: {
        read: admin,
      },
    },
    {
      name: 'team-size',
      type: 'select',
      options: swagSizes,
      required: false,
      access: {
        read: admin,
      },
    },
    {
      name: 'key-skills',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
    {
      name: 'team-roles',
      type: 'array',
      fields: [
        {
          name: 'name',
          label: 'role',
          type: 'text',
        },
      ],
      required: false,
      access: {
        read: admin,
      },
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

export default Projects
