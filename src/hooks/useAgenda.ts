import { getAgenda } from '@/api';
import {useQuery} from 'react-query';


export const useAgenda = () =>{
  const data = useQuery(['agenda'], {queryFn: getAgenda, staleTime: Infinity});

  return data;
}