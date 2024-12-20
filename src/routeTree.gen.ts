/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const QueryLazyImport = createFileRoute('/query')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const QueryLazyRoute = QueryLazyImport.update({
  path: '/query',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/query.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/query': {
      id: '/query'
      path: '/query'
      fullPath: '/query'
      preLoaderRoute: typeof QueryLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/query': typeof QueryLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/query': typeof QueryLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/query': typeof QueryLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/query'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/query'
  id: '__root__' | '/' | '/query'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  QueryLazyRoute: typeof QueryLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  QueryLazyRoute: QueryLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/query"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/query": {
      "filePath": "query.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */