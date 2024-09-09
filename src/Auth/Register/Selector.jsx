import React from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const Selector = ({ data, selected, setSelected }) => {
   const [query, setQuery] = useState("");

   const filteredPeople =
      query === ""
         ? data
         : data.filter((person) => {
              return person.name.toLowerCase().includes(query.toLowerCase());
           });
   return (
      <div>
         <div className="appearance-none block w-full bg-slate-100 text-gray-900 font-medium border border-gray-400 rounded-lg  leading-tight focus:outline-none">
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery("")}>
               <div className="relative">
                  <ComboboxInput
                     className={clsx("w-full outline-none rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-black", "focus:outline-none data-[focus]:outline-none data-[focus]:-outline-offset-2 data-[focus]:outline-white/25")}
                     displayValue={(person) => person?.name}
                     onChange={(event) => setQuery(event.target.value)}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                     <ChevronDownIcon className="size-4  group-data-[hover]:fill-white" />
                  </ComboboxButton>
               </div>

               <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx("w-[var(--input-width)] rounded-xl border  bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible", "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0")}
               >
                  {filteredPeople.map((person) => (
                     <ComboboxOption key={person.id} value={person} className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10">
                        <CheckIcon className="invisible size-4 focus:bg-black group-data-[selected]:visible text-gray-600" />
                        <div className="text-sm/6 font-pansy">{person.name}</div>
                     </ComboboxOption>
                  ))}
               </ComboboxOptions>
            </Combobox>
         </div>
      </div>
   );
};

export default Selector;
