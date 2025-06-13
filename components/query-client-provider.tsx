"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

interface QueryProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const QueryClientProviderWrapper: React.FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

export default QueryClientProviderWrapper 