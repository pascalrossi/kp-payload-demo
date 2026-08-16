import type { ServerFunctionClient } from 'payload'
import type React from 'react'

import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'

import configPromise from '../../../payload.config'
import { importMap } from './importMap.js'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  })
}

const Layout = ({ children }: Args) =>
  RootLayout({
    children,
    config: configPromise,
    importMap,
    serverFunction,
  })

export default Layout
