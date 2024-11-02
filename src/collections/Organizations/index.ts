import { addressGroup, contactGroup } from '@/data/collectionGroups'
import { admin, adminOrOrgMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Organizations: CollectionConfig = {
  slug: 'organizations',
  access: {
    create: admin,
    update: adminOrOrgMember,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
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

export default Organizations
