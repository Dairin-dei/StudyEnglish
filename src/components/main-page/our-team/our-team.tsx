import { teamMembers } from "../../../const/const";

const OurTeam: React.FC = () => {
  return (
    <section className="team">
      <div className="team__wrapper container">
        <h2 className="team__title">Наша команда</h2>

        <ul className="team__list">
          {teamMembers.map(({ id, name, work, ghLink, avatar, role }) => (
            <li key={id} className="team__item">
              <article className="team__card">
                <h3 className="team__name">{name}</h3>
                <span className="team__role">{role}</span>

                <div>
                  <img
                    className="team__avatar"
                    width="200"
                    height="200"
                    src={avatar}
                    alt={`${name} - член команды разработки`}
                  />
                </div>

                <p className="team__work">{work}</p>


              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
