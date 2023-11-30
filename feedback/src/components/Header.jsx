import React from "react";

function Header({ title, textColor, bgColor }) {
  const myStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={myStyle}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Meu app", // Para se não tiver nenhum retorno, ter esse coomo padrão
  bgColor: "black",
  textColor: "purple",
};

export default Header;
