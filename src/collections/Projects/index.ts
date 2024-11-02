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
  admin: {
    // TODO: It would be useful to include the organization as well as the
    // brief description in the title
    useAsTitle: 'brief-description',
  },
  fields: [
    {
      name: 'organizations',
      label: 'Organization',
      type: 'relationship',
      relationTo: 'organizations',
      required: true,
    },
    {
      name: 'events',
      label: 'Event',
      type: 'relationship',
      relationTo: 'events',
      required: false,
    },
    {
      name: 'brief-description',
      label: 'Brief Description (for public display)',
      type: 'text',
      required: true,
    },
    {
      name: 'extended-description',
      // TODO: Should the extended description be visible to the organization?
      label: 'Extended Description (for admin use)',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
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
      label: 'Notes (admin only)',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
      },
    },
  ],
}

export default Projects
