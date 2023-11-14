"use client"

import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';
import {useState} from 'react'

const CustomFilter = ({title,options}:CustomFilterProps) => {

  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };
  return (
    <div>CustomFilter</div>
  )
}

export default CustomFilter