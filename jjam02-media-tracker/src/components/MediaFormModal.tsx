
import { useState } from "react";
import { createPortal } from "react-dom";
import MediaForm from "./MediaForm";



function MediaFormModal() {
    const [showModal, setShowModal] = useState(false);
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