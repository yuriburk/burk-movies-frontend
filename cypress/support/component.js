/* eslint-disable no-undef */
import { mount } from 'cypress/react18'
import './commands'
import '@/app/globals.css'

Cypress.Commands.add('mount', mount)

export {}
