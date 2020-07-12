import Tasks from '../Tasks/Tasks';
import AddTask from '../AddTask/AddTask';

const Main = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.appendChild(AddTask());
  main.appendChild(Tasks());
  return main;
}

export default Main;