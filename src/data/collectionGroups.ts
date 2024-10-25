import { Field } from 'payload'
import stateOptions from './stateOptions'

// TODO: It may be unwise to make these fields required.
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
