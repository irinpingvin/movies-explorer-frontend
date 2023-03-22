import {useNavigate} from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function previousPage() {
    navigate(-1);
  }

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__link" onClick={previousPage}>Назад</button>
    </div>
  );
}

export default PageNotFound;