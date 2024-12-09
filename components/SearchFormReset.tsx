"use client"

import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {

    const reset = ()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form){
            form.reset();
        }

    }

  return <button type="reset" onClick={reset}>
    <Link href="/" className="search-btn text-white flex items-center justify-center">
        <X className="size-5" />
    </Link>
  </button>;
};

export default SearchFormReset;
