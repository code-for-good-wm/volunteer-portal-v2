import { Field } from 'payload'
import stateOptions from './stateOptions'
import { admin } from '@/utilities/access'

// TODO: It may be unwise to make these fields required.
// TODO: WHY?
export const addressGroup: Field[] = [
  {
    name: 'address-line1',
    type: 'text',
    required: true,
  },
  {
    name: 'address-line2',
    type: 'text',
    required: false,
  },
  {
    name: 'city',
    type: 'text',
    required: true,
  },
  {
    name: 'state',
    type: 'select',
    options: stateOptions,
    required: true,
  },
  {
    name: 'postal-code',
    type: 'text',
    required: true,
  },
]

export const contactGroup: Field[] = [
  {
    name: 'name',
    type: 'text',
    required: true,
  },
  //TODO: make sure there's only one primary contact ??
  {
    name: 'primary-contact',
    type: 'checkbox',
    required: false,
  },
  {
    name: 'phone-number',
    type: 'text',
    required: false,
  },
  {
    name: 'email',
    type: 'email',
    required: false,
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
]

const agreementDataGroup: Field[] = [
  {
    name: 'version',
    type: 'text',
    required: false,
  },
  {
    name: 'date',
    type: 'date',
    required: false,
  },
  // TODO: Do we add a boolean value here as well for simplicity?
]

export const agreementsGroup: Field[] = [
  {
    name: 'codeOfConduct',
    type: 'group',
    fields: agreementDataGroup,
  },
  {
    name: 'photoRelease',
    type: 'group',
    fields: agreementDataGroup,
  },
  {
    name: 'termsAndConditions',
    type: 'group',
    fields: agreementDataGroup,
  },
]
