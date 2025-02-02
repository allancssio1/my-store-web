'use client'

import { Loader2 } from 'lucide-react'

type LoadingModalProps = {
  isOpen: boolean
}

export function LoadingModal({ isOpen }: LoadingModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary/10  backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    </div>
  )
}
