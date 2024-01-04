import FormWrapper from "../../components/Form/FormWrapper";

function CarSortForm({ onSort, sortKey }) {
  function handleChangeSortOption(e) {
    onSort(e.target.value);
  }

  return (
      <FormWrapper>
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortKey}
          onChange={handleChangeSortOption}
        >
          <option value="created_at">Date added</option>
          <option value="price">Price</option>
          <option value="engine">Engine power</option>
          <option value="year">Year of production</option>
        </select>
      </FormWrapper>
  );
}

export default CarSortForm;
