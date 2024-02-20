import { PlacesOption } from '../../const';
import SortItem from './sort-item';

function Sort () {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(PlacesOption)
        .map((option) => <SortItem option={option} key={option}/>)}
    </ul>
  );
}

export default Sort;
