type TabItemProps = {
  place: string;
}

function TabItem ({place} : TabItemProps) : JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{place}</span>
      </a>
    </li>
  );
}

export default TabItem;
