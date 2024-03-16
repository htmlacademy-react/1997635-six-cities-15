import { PlacesOption } from '../../const';

type SortItemProps = {
  option: PlacesOption;
  handleSortActive: (activeSortType: PlacesOption) => void;
  currentSortType: PlacesOption;
}

function SortItem ({option, handleSortActive, currentSortType} : SortItemProps) : JSX.Element {
  return (
    <li
      className={`places__option ${currentSortType === option ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => handleSortActive(option)}
    >
      {option}
    </li>
  );
}

export default SortItem;
