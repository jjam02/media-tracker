

import { createPortal } from "react-dom";
import MediaForm from "./MediaForm";

interface MediaFormModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;

}


function MediaFormModal({ showModal, setShowModal }: MediaFormModalProps) {

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add Media</button>
            {showModal && createPortal(
                <MediaForm onClose={() => setShowModal(false)} />,
                document.body
            )}
        </div>
    )
}

export default MediaFormModal;