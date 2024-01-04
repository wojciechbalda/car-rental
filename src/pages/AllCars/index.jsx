import supabase from "../../config/supabase";
import ContentContainer from "../../components/UI/ContentContainer";
import Cars from "../../components/Cars/Cars";
import { useLoaderData } from "react-router-dom";
import CarSortForm from "./CarSortForm";
import { useEffect, useState } from "react";
import CarsFilterForm from "./CarsFilterForm";

export function Component() {
  const [cars, setCars] = useState(useLoaderData());
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    types: [],
  });
  const [sortKey, setSortKey] = useState("created_at");

  function handleSort(value) {
    setSortKey(value);
  }

  useEffect(() => {
    const getNewData = async () => {
      let query = supabase.from("cars").select();

      if (filters.types.length) query = query.in("type", filters.types);
      if (filters.minPrice) query = query.gte("price", filters.minPrice);
      if (filters.maxPrice) query = query.lte("price", filters.maxPrice);
      if (sortKey) query = query.order(sortKey, { ascending: false });

      const { data, error } = await query;

      if (!error) setCars(data);
    };

    getNewData();
  }, [filters, sortKey]);

  return (
    <ContentContainer>
      <p>
        Number of cars: <span>{cars.length}</span>
      </p>
      <CarSortForm onSort={handleSort} sortOption={sortKey} />
      <CarsFilterForm onSearch={setFilters} />
      <Cars data={cars} />
    </ContentContainer>
  );
}

export async function loader() {
  const { data, error } = await supabase.from("cars").select();

  if (error) return null;

  return data;
}
