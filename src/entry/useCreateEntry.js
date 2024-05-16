import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createEditentry } from "../api/apiEntry";

export const useCreateEntry = () => {
  const queryClient = useQueryClient();

  const { mutate: createEntry, isLoading: isCreating } = useMutation({
    mutationFn: createEditentry,
    onSuccess: () => {
      toast.success("New Employee slot successfully created");
      queryClient.invalidateQueries({ queryKey: ["empManagement"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createEntry, isCreating };
};
