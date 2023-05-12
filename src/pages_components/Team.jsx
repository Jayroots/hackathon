import React from 'react';
import imagealbum from "./../assets/images/album-photo.png";


const Team = () => {
  return (
    <>   <div className='la-team-pp'>
          <p>Team of the Hackathon</p></div>
      <div className="team-component">
               
        <div className="team-member">
          <img src="https://tse2.explicit.bing.net/th?id=OIP.Ppjx5ofyam1am6lQcap_igHaGe&pid=Api&P=0" alt="Team Member 1" className="team-member__photo" />
          <p className="team-member__description"> Sébastien - Développeur Full Stack. Il travail à la fois en développement back-end et front-end.
          </p>
        </div>
        <div className="team-member">
          <img src="https://tse4.mm.bing.net/th?id=OIP.WoUR6HOol3JlbclKBAv3mwHaD4&pid=Api&P=0" alt="Team Member 2" className="team-member__photo" />
          <p className="team-member__description">Mara - Développeuse Full Stack. Rigolote et polyvalente, elle travaille sur divers aspects du développement.</p>
        </div>
        <div className="team-member">
          <img src="https://tse4.mm.bing.net/th?id=OIP.mUibgH7zai54OhVoxBwJIwHaE6&pid=Api&P=0" alt="Team Member 3" className="team-member__photo" />
          <p className="team-member__description">Julien - Développeur Full Stack. À l'aise dans le style, il apporte une touche artistique à nos projets.</p>
        </div>
        <div className="team-member">
          <img src="https://tse1.mm.bing.net/th?id=OIP.VeiFtyL_6rGZWuOeDl9WHAHaE4&pid=Api&P=0" alt="Team Member 4" className="team-member__photo" />
          <p className="team-member__description">Jeremy - Développeur Full Stack. Expert en organisation et en présentation du code, il est partout à la fois.</p>
        </div>
        
        </div>
      
    </>
  );
};

export default Team;