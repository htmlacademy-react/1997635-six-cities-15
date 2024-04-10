import { memo } from 'react';
import { Locations } from '../../const';
import TabItem from './tab-item';

function Tabs () {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Locations)
            .map((place) => <TabItem place={place} key={place}/>)}
        </ul>
      </section>
    </div>
  );
}
const MemorizedTabs = memo(Tabs);

export default MemorizedTabs;
