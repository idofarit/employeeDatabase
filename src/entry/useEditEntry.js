import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createEditentry } from "../api/apiEntry";

export const useEditEntry = () => {
  const queryClient = useQueryClient();

  const { mutate: editEntry, isLoading: isEditing } = useMutation({
    mutationFn: ({ newEntryData, id }) => createEditentry(newEntryData, id),
    onSuccess: () => {
      toast.success(" Entry successfully edited");
      queryClient.invalidateQueries({ queryKey: ["empManagement"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editEntry, isEditing };
};
