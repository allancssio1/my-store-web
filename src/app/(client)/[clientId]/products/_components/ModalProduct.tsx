import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface ModalProps {
  title?: string
  description?: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const ModalProduct: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {children ?? ''}
      </DialogContent>
    </Dialog>
  )
}
