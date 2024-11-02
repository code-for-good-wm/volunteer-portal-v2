import { addressGroup } from '@/data/collectionGroups'
import { admin, adminOrOrgMember } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Organizations: CollectionConfig = {
  slug: 'organizations',
  access: {
    create: admin,
    update: adminOrOrgMember,
    delete: () => false,
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
