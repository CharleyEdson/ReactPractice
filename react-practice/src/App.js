import ProfileCard from "./ProfileCard";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa99" 
              description="Alexa was created by amazon and helps you buy things."/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cortana32" description="Cortana was created by MSFT and helps you buy things."/>
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" description="Siri was created by Apple and helps you buy things."/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
