import { getAgenda } from "@/api";
import { useQuery } from "react-query";

export const useAgenda = () =>
  useQuery(["agenda"], { queryFn: getAgenda, staleTime: Infinity });
