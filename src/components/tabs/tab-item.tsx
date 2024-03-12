import { Locations } from '../../const';

type TabItemProps = {
  activeTab: keyof typeof Locations;
  place: Locations;
  handleTabActive: (place: keyof typeof Locations) => void;
}

function TabItem ({activeTab, place, handleTabActive} : TabItemProps) : JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${activeTab === place ? ' tabs__item--active' : ''}`}
        href="#"
        onClick={() =>handleTabActive(place)}
      >
        <span>{place}</span>
      </a>
    </li>
  );
}

export default TabItem;
