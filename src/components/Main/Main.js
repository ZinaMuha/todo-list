import Tasks from '../Tasks/Tasks';
import FormWrapper from '../FormWrapper/FormWrapper';
import * as actions from '../../scripts/actions';

const Main = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  
  let list = actions.getTasks();

  const formWrapper = new FormWrapper();
  const tasks = new Tasks(list);

  main.append(formWrapper, tasks);
  return main;
}

export default Main;