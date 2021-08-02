import ReactDOM from 'react-dom';
import App from './App';

Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
