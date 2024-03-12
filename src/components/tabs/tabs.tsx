import { useState } from 'react';
import { Locations } from '../../const';
import TabItem from './tab-item';

function Tabs () {
  const [activeTab, setActiveTab] = useState<keyof typeof Locations>(Locations.Paris);

  /*const handleTabHover = () => {

  };*/

  const handleTabActive = (place: keyof typeof Locations): void => {
    setActiveTab(place);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(Locations)
            .map((place) => <TabItem activeTab={activeTab} place={place} key={place} handleTabActive={handleTabActive}/>)}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
