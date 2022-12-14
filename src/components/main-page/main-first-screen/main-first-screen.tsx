const MainFirstScreen: React.FC = () => {
  return (
    <section className="first-screen">
      <div className="first-screen__wrapper container">
        <div>
          <h1 className="first-screen__title">Изучайте Английский весело!</h1>
          <p className="first-screen__text">
            Study English позволит вам узнать много новых слов, запомнить произношение
            и весело провести время
          </p>
        </div>

        <div className="first-screen__image-wrapper">
          <img
            className="first-screen__image"
            src="assets/images/jumping-girl.png"
            width="287"
            height="287"
            alt="Счастливый студент после Study English"
          />
        </div>
      </div>
    </section>
  );
};

export default MainFirstScreen;
