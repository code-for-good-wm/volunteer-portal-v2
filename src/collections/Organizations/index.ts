import { addressGroup } from '@/data/collectionGroups'
import { admin, adminOrOrganization } from '../../utilities/access'
import type { CollectionConfig } from 'payload'

const Organizations: CollectionConfig = {
  slug: 'organizations',
  access: {
    create: admin,
    update: adminOrOrganization,
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
  ],
}

export default Organizations
