import { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CourseCard />
    </div>
  );
}

export default App;
