

import { createPortal } from "react-dom";
import MediaForm from "./MediaForm";

interface MediaFormModalProps {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    setMediaList: React.Dispatch<React.SetStateAction<import("../types/media").default[]>>;

}

function MediaFormModal({ showModal, setShowModal, setMediaList }: MediaFormModalProps) {

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add Media</button>
            {showModal && createPortal(
                <MediaForm onClose={() => setShowModal(false)} setMediaList={setMediaList} />,
                document.body
            )}
        </div>
    )
}

export default MediaFormModal;