import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

const Footer = () => {
  return (
      <div>
          <span>Show:</span>
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>
              ALL
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
              COMPLETED
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
              ACTIVE
          </FilterLink>
      </div>
  )
}
export default Footer;
