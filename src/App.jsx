
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { fetchNavbarData } from './store/navbarSlice';
import { useEffect } from 'react';
import { fetchCompanyRatings } from './store/companyPartnersRatingsSlice';
import { fetchCourses } from './store/coursesSlice';
import { fetchPlacedStudents } from './store/placedStudentsSlice';
import { fetchCoursesData } from './store/coursesDataSlice';
import Layout from './components/Layout';
import { fetchComponentData } from './api/fetchComponentData';
import AboutCourse from './components/CourseDetails/AboutCourse';


  const router = createBrowserRouter([
    {
      // path:'/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/best-sap-training',
          loader: () => fetchComponentData('best-sap-training'),
          element: <AboutCourse />
        },
      ]
    }
  ])


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbarData());
    dispatch(fetchCompanyRatings());
    dispatch(fetchCourses());
    dispatch(fetchPlacedStudents());
    dispatch(fetchCoursesData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
  // (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/best-sap-training' loader: () => fetchComponentData(path) />
    //     </Route>
    //   </Routes>
    // </Router>
       
  // )
}

export default App
