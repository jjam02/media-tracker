import type { Media } from "../types/media";

interface MediaFormProps {
    onClose: () => void;
    setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;
    currentMedia: Media;
}

export default function MediaForm({ onClose, setMediaList, currentMedia }: MediaFormProps) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"

        >
            <div
                className="bg-white dark:bg-gray-800 rounded-lg drop-shadow-2xl p-6 w-11/12 max-w-2xl max-h-screen overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">Edit Media</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    // Save to localStorage
                    const formData = new FormData(e.target as HTMLFormElement);
                    console.log("Form submitted");
                    const newMedia: Media = {
                        id: Date.now().toString(),
                        title: formData.get("title") as string,
                        type: formData.get("type") as string,
                        status: formData.get("status") as string,
                        score: Number(formData.get("rating")),
                    };
                    setMediaList(prev => prev.map(media => media.id === currentMedia.id ? newMedia : media));
                    onClose();
                }}>
                    Title:<input name="title" type="text" required defaultValue={currentMedia.title} className="w-full mb-4 p-2 border border-blue-300 dark:border-blue-600 rounded dark:bg-slate-800 dark:text-blue-100 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <label htmlFor="type-select">Type:</label>
                    <select required defaultValue={currentMedia.type} name="type" id="type-select" className="w-full mb-4 p-2 border border-blue-300 dark:border-blue-600 rounded dark:bg-slate-800 dark:text-blue-100 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">select a media format</option>
                        <option value="TV">TV</option>
                        <option value="Movie">Movie</option>
                    </select>
                    Status:<select required defaultValue={currentMedia.status} name="status" id="status-select" className="w-full mb-4 p-2 border border-blue-300 dark:border-blue-600 rounded dark:bg-slate-800 dark:text-blue-100 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">select a status</option>
                        <option value="planning">planning</option>
                        <option value="on-hold">on-hold</option>
                        <option value="watching">watching</option>
                        <option value="completed">completed</option>
                    </select>
                    Rating:<div className="flex items-center gap-2 mb-4">
                        <input type="number" id="score" name="rating" required defaultValue={currentMedia.score} min="0" max="10" className="w-16 p-2 border border-blue-300 dark:border-blue-600 rounded dark:bg-slate-800 dark:text-blue-100 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <span className="text-slate-900 dark:text-blue-100">/10</span>
                    </div>
                    <button onClick={onClose} type="button" className="mt-4">Close</button>
                    <button type="submit" className="mt-4 ml-4">Submit</button>
                </form>



            </div>
        </div >
    )

}
