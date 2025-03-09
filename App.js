import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "Avanzato",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Avanzato",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "Avanzato",
    color: "#C3DCAF",
  },
  {
    skill: "Git e GitHub",
    level: "Intermedio",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Avanzato",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "Principiante",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <img src="./foto/fotome.jpg" alt="Foto profilo" className="avatar"></img>
      <Data />
    </div>
  );
}

function Data() {
  return (
    <div className="data">
      <h1>Tiziano Genovese</h1>
      <span>
        🎯 Full Stack Developer | 🚀 Passione per la tecnologia ed il problem
        solving Dopo aver completato un corso intensivo come Full Stack
        Developer, ho acquisito competenze nello sviluppo di applicazioni web
        moderne, lavorando con tecnologie come JavaScript, Angular, HTML, CSS,
        sto studiando anche React e backend con Java/Spring.
      </span>
      <SkillList skills={skills} />
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skillObj, index) => (
        <Skill key={index} skill={skillObj} />
      ))}
    </ul>
  );
}

function Skill({ skill }) {
  return (
    <li
      className="skill"
      style={{
        backgroundColor: skill.color,
      }}
    >
      <span>{skill.skill}</span>
      <span>{getEmoji(skill.level)}</span>
    </li>
  );

  function getEmoji(level) {
    switch (level) {
      case "Avanzato":
        return "💪";
      case "Intermedio":
        return "👍";
      case "Principiante":
        return "👶";
      default:
        return "❓";
    }
  }
}

export default App;
