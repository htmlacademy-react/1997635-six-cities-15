import { Locations } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectCity } from '../../store/offers-process/offers-process.selectors';
import { changeCity } from '../../store/offers-process/offers-process.slice';


type TabItemProps = {
  place: Locations;
}

function TabItem ({ place } : TabItemProps) : JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectCity);
  const isActive = currentCity === place;

  const handleTabClick = () => {
    if(!isActive){
      dispatch(changeCity(place));
    }
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${isActive ? ' tabs__item--active' : ''}`}
        href="#"
        onClick={handleTabClick}
      >
        <span>{place}</span>
      </a>
    </li>
  );
}

export default TabItem;
