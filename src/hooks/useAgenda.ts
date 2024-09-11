import { getAgenda } from "@/api";
import { useQuery } from "react-query";

const fiveMinutes = 1000 * 60 * 5;

export const useAgenda = () => useQuery(["agenda"], { queryFn: getAgenda, staleTime: fiveMinutes, refetchInterval: fiveMinutes });
