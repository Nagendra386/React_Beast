import reactImg from "../assets/react-core-concepts.png";

export const Header = ({value}) => {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {value} React concepts you will need for almost any app you are
          going to build apps!
        </p>
      </header>
    )
  }
  