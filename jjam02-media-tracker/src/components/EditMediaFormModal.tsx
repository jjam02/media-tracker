

import { createPortal } from "react-dom";
import EditMediaForm from "./EditMediaForm";

interface EditMediaFormModalProps {
    showEditModal: boolean;
    setShowEditModal: (showEditModal: boolean) => void;
    setMediaList: React.Dispatch<React.SetStateAction<import("../types/media").Media[]>>;

}

function EditMediaFormModal({ showEditModal, setShowEditModal, setMediaList }: EditMediaFormModalProps) {

    return (
        <div>
            <button onClick={() => setShowEditModal(true)}>Edit</button>
            {showEditModal && createPortal(
                <EditMediaForm onClose={() => setShowEditModal(false)} setMediaList={setMediaList} />,
                document.body
            )}
        </div>
    )
}

export default EditMediaFormModal;