import { deleteEntry as deleteEntryAPI, getEntrys } from "../api/apiEntry";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

export const useDeleteEntry = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteEntry } = useMutation({
    mutationFn: deleteEntryAPI,
    onSuccess: () => {
      toast.success("Entry deleted");
      queryClient.invalidateQueries({
        queryKey: ["empManangement"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteEntry };
};
