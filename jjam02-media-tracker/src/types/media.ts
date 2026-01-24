export type Media = {
  id: string;
  title: string;
  type: string;
  status: string;
  score: number;
};

export type MediaFunctions = {
  editMedia: (id: string, updatedMedia: Partial<Media>) => void;
  deleteMedia: (id: string) => void;
};

export type EditModalControls = {
  showEditModal: boolean;
  setShowEditModal: (showEditModal: boolean) => void;
};
