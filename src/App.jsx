
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { fetchNavbarData } from './store/navbarSlice';
import { useEffect } from 'react';
import { fetchCompanyRatings } from './store/companyPartnersRatingsSlice';
import { fetchCourses } from './store/coursesSlice';
import { fetchPlacedStudents } from './store/placedStudentsSlice';
import { fetchCoursesData } from './store/coursesDataSlice';
import Layout from './components/Layout';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbarData());
    dispatch(fetchCompanyRatings());
    dispatch(fetchCourses());
    dispatch(fetchPlacedStudents());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
