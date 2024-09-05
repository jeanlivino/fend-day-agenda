import { getAgenda } from "@/api";
import { useQuery } from "react-query";

const tenMinutes = 1000 * 60 * 10;

export const useAgenda = () => useQuery(["agenda"], { queryFn: getAgenda, staleTime: tenMinutes });
