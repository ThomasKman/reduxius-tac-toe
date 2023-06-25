import { Header } from '../features/selectHeader/Header';
import { Selector } from '../features/selector/Selector';
import { Link } from 'react-router-dom';

function Select() {
  return (
    <div className="App">
      <Header />

      <Selector />
    </div>
  );
}

export default Select;
