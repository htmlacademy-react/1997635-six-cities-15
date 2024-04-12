import { PlacesOption } from '../../const';

type SortItemProps = {
  option: PlacesOption;
  onSortActive: (activeSortType: PlacesOption) => void;
  currentSortType: PlacesOption;
}

function SortItem ({option, onSortActive, currentSortType} : SortItemProps) : JSX.Element {
  return (
    <li
      className={`places__option ${currentSortType === option ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => onSortActive(option)}
    >
      {option}
    </li>
  );
}

export default SortItem;
