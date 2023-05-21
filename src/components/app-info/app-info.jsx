import './app-info.scss';

const AppInfo = ({amountOfWorkers, amountOfAllowance}) => (
  <div className="app-info">
    <h1>Учёт сотрудников в компании N</h1>
    <h2>Общее число сотрудников: {amountOfWorkers}</h2>
    <h2>Премию получат: {amountOfAllowance}</h2>
  </div>
);

export default AppInfo;
