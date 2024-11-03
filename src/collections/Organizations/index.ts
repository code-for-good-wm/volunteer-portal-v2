import { addressGroup, contactGroup } from '@/data/collectionGroups'
import { adminOrBoardMember, adminOrOrgOrBoardMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Organizations: CollectionConfig = {
  slug: 'organizations',
  access: {
    create: adminOrBoardMember,
    update: adminOrOrgOrBoardMember,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'New Organization',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'address',
      type: 'group',
      fields: addressGroup,
    },
    {
      name: 'website',
      type: 'text',
      required: true,
    },
    {
      name: 'contacts',
      type: 'array',
      fields: contactGroup,
      access: {
        read: adminOrOrgOrBoardMember,
      },
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
  ],
}

export default Organizations
