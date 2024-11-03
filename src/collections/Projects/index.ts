import swagSizes from '@/data/swagSizes'
import { adminOrBoardMember } from '@/utilities/access'
import type { CollectionConfig } from 'payload'

const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: adminOrBoardMember,
    update: adminOrBoardMember,
    delete: () => false,
  },
  admin: {
    // TODO: It would be useful to include the organization as well as the
    // brief description in the title
    useAsTitle: 'brief-description',
  },
  fields: [
    {
      name: 'teams',
      type: 'relationship',
      relationTo: 'teams',
      hasMany: true,
    },
    {
      name: 'brief-description',
      label: 'Brief Description (for public display)',
      type: 'text',
      required: true,
      defaultValue: 'New Project',
    },
    {
      name: 'extended-description',
      // TODO: Should the extended description be visible to the organization?
      label: 'Extended Description (for admin use)',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
      },
    },
    {
      name: 'project-size',
      type: 'select',
      options: swagSizes,
      required: false,
      access: {
        read: adminOrBoardMember,
      },
    },
    {
      name: 'team-size',
      type: 'select',
      options: swagSizes,
      required: false,
      access: {
        read: adminOrBoardMember,
      },
    },
    {
      name: 'key-skills',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
      },
    },
    {
      name: 'notes',
      label: 'Notes (admin/board member only)',
      type: 'textarea',
      required: false,
      access: {
        read: adminOrBoardMember,
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
  ],
}

export default Projects
