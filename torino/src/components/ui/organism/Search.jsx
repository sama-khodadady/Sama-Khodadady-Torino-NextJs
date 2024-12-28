"use client";

import { useState } from "react";
import Origin from "@/ui/molecule/Origin";
import { getCities } from "@/utils/cities";
import Calender from "@/ui/molecule/Calender";
import { setQuery } from "@/utils/queryParams";
import { useGetTours } from "@/services/queries";
import { useAuth } from "@/providers/AuthContext";
import Destination from "@/ui/molecule/Destination";
import styles from "@/ui/organism/Search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
  const { setOrigin, setDestination } = useAuth();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState({
    originId: "",
    destinationId: "",
    date: [],
  });

  const { replace } = useRouter();
  const pathName = usePathname();

  const searchHandler = () => {
    const params = setQuery(search, searchParams);
    replace(`${pathName}?${params.toString()}`);
    setDestination("");
    setOrigin("");
    setSearch({
      originId: "",
      destinationId: "",
      date: [],
    });
  };

  const { data } = useGetTours();
  const cities = getCities(data?.data);

  return (
    <div className={styles.search}>
      <Origin setSearch={setSearch} cities={cities} />
      <Destination setSearch={setSearch} cities={cities} />
      <Calender setSearch={setSearch} />
      <button className={styles.button} onClick={searchHandler}>
        جستجو
      </button>
    </div>
  );
}

export default Search;
