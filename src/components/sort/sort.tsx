import { PlacesOption } from '../../const';
import SortItem from './sort-item';

type SortProps = {
  onSortActive: (activeSortType: PlacesOption) => void;
  currentSortType: PlacesOption;
  showSort: boolean;
}

function Sort ({onSortActive, currentSortType, showSort} : SortProps): JSX.Element {
  return (
    <ul className={`places__options places__options--custom${showSort ? ' places__options--opened' : ''}`}>
      {(Object.values(PlacesOption) as Array<PlacesOption>)
        .map((option) => <SortItem option={option} key={option} onSortActive={onSortActive} currentSortType={currentSortType}/>)}
    </ul>
  );
}

export default Sort;
