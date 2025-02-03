import { ReactNode } from "react";
import { X } from "lucide-react";
import { Content, Dialog, DialogContent, DialogHeader, DialogTitle } from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog open={isOpen} $onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <X
              onClick={onClose}
              style={{ cursor: "pointer", color: "GrayText" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "black")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
            />
          </DialogTitle>
        </DialogHeader>
        <Content>{children}</Content>
      </DialogContent>
    </Dialog>
  );
}
