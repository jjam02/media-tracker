import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { Media, EditModalControls } from "../types/media";
import EditMediaForm from "./EditMediaForm";

interface EditMediaFormModalProps {
    currentMedia: Media;
    editModalControls: EditModalControls;
    setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;

}

function EditMediaFormModal({ currentMedia, editModalControls, setMediaList }: EditMediaFormModalProps) {

    // useEffect(() => {
    //     if (editModalControls.showEditModal) {
    //         console.log(`Edit modal opened for id=${currentMedia.id} title="${currentMedia.title}"`);
    //     }
    // }, [editModalControls.showEditModal, currentMedia.id, currentMedia.title]);

    return (
        <div>
            <button onClick={() => { editModalControls.setShowEditModal(true) }}>Edit</button>
            {editModalControls.showEditModal && createPortal(
                <EditMediaForm onClose={() => editModalControls.setShowEditModal(false)} currentMedia={currentMedia} setMediaList={setMediaList} />,
                document.body
            )}
        </div>
    )
}

export default EditMediaFormModal;