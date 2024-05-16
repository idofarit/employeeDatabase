import { useQuery } from "@tanstack/react-query";
import { getEntrys } from "../api/apiEntry";

export const useEntrys = () => {
  const {
    isLoading,
    data: entrys,
    error,
  } = useQuery({
    queryKey: ["empManagement"],
    queryFn: getEntrys,
  });
  return { isLoading, error, entrys };
};
