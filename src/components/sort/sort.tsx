import { PlacesOption } from '../../const';
import SortItem from './sort-item';

type SortProps = {
  handleSortActive: (activeSortType: PlacesOption) => void;
  currentSortType: PlacesOption;
}

function Sort ({handleSortActive, currentSortType} : SortProps): JSX.Element {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {(Object.values(PlacesOption) as Array<PlacesOption>)
        .map((option) => <SortItem option={option} key={option} handleSortActive={handleSortActive} currentSortType={currentSortType}/>)}
    </ul>
  );
}

export default Sort;
