import { addressGroup, contactGroup } from '@/data/collectionGroups'
import { admin, adminOrOrgMember } from '../../utilities/access'
import type { Access, CollectionConfig } from 'payload'

// TODO: Add typing, e.g. Access<Profile>
export const adminOrOwner: Access = ({ req: { user }, data }) => {
  if (user) {
    if (user.role?.includes('admin')) {
      return true
    }

    const profileOwner = data.user

    return profileOwner.id === user.id
  }

  return false
}

const Profiles: CollectionConfig = {
  slug: 'profiles',
  access: {
    read: adminOrOwner,
    update: adminOrOwner,
    delete: () => false,
  },
  admin: {
    // TODO: We'll need access to the user name here
    // useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: 'New Profile',
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
        read: adminOrOrgMember,
      },
    },
    {
      name: 'notes',
      label: 'Notes (admin only)',
      type: 'textarea',
      required: false,
      access: {
        read: admin,
        update: admin,
      },
    },
  ],
}

export default Profiles
