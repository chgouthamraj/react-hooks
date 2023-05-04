import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterOne from './components/HookCounterOne';
import HookUseStateWithArray from './components/HookUseStateWithArray';
import UseEffect from './components/UseEffect/UseEffect';
import HookMouse from './components/UseEffect/HookMouse';
import MouseContainer from './components/UseEffect/MouseContainer';
import IntervalCounter from './components/UseEffect/IntervalCounter';
import ParentComponent from './components/useCallBack/ParentComponent';
import Counter from './components/useMemo/Counter';
import FocusInput from './components/useRef/FocusInput';
import HookTime from './components/useRef/HookTimer';
import Counter1 from './components/useReducer/Counter1';
import Counter2 from './components/useReducer/Counter2';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterOne /> */}
      {/* <HookUseStateWithArray /> */}
      {/* <UseEffect /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <HookTime /> */}
      {/* <Counter1 /> */}
      <Counter2 />
    </div>
  );
}

export default App;
