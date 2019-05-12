import React from 'react';
import MediaCard from './MediaCard';
import logo from './logo.svg';

class MediaList extends React.Component {
  render() {
    const all = (
      <div>
        <h1>Título</h1>
        <ul>
          <li>
            <MediaCard
             name="Alex Guerrero"
             date="Martes 7 de mayo del 2019"
             img= {logo}
             text='Reducio locomotor petrificus incantatem tarantallegra rictusempra serpensortia. Aparecium levicorpus engorgio aguamenti aresto legilimens sectumsempra reparo incarcerous cushioning funnunculus. Immobilus lumos quietus momentum impedimenta. Totalus aresto lumos serpensortia momentum scourgify funnunculus petrificus. Aparecium cruciatus sonorus quietus petrificus ennervate. '
             likes= '37'  />
          </li>
          <li>
            <MediaCard 
            name="Fulano de tal" 
            date="Lunes 17 de marzo del 2019"
             img= {logo}
             text='Reducto lacarnum legilimens funnunculus cushioning aparecium vow mortis mobilicorpus aparecium. Immobilus langlock mobilicorpus leviosa engorgio. Accio engorgio expecto conjunctivitis incarcerous cushioning tarantallegra protego. Episkey crucio inflamarae concealment aresto funnunculus protego lumos momentum vipera inflamarae. Petrificus imperturbable evanesco imperio mobilicorpus lumos mobilicorpus incarcerous accio serpensortia. Alohomora immobilus aguamenti engorgio confundus vipera hover quietus. Aresto petrificus imperio charm- bulbadox momentum reducio. Serpensortia patronum crucio inflamarae. '
             likes= '876'  />
          </li>
          <li>
          <MediaCard 
            name="Mengano de alla" 
            date="Viernes 8 de marzo del 2019"
             img= {logo}
             text='Reducto lacarnum legilimens funnunculus cushioning aparecium vow mortis mobilicorpus aparecium. Immobilus langlock mobilicorpus leviosa engorgio. Accio engorgio expecto conjunctivitis incarcerous cushioning tarantallegra protego. Episkey crucio inflamarae concealment aresto funnunculus protego lumos momentum vipera inflamarae. Petrificus imperturbable evanesco imperio mobilicorpus lumos mobilicorpus incarcerous accio serpensortia. Alohomora immobilus aguamenti engorgio confundus vipera hover quietus. Aresto petrificus imperio charm- bulbadox momentum reducio. Serpensortia patronum crucio inflamarae. '
             likes= '876'  />
          </li>
        </ul>
      </div>
    );
    return all;
  };
}
export default MediaList;
