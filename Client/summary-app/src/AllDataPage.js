// src/AllDataPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllDataPage.css'; // Optional: Add custom styling here

const AllDataPage = () => {
  const [subjectData, setSubjectData] = useState([]);
  const [schoolData, setSchoolData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [awardData, setAwardData] = useState([]);
  const [classData, setClassData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectRes, schoolRes, assessmentRes, awardRes, classRes, summaryRes] = await Promise.all([
          axios.get('http://127.0.0.1:8000/assessments/subject-details/'),
          axios.get('http://127.0.0.1:8000/assessments/school-details/'),
          axios.get('http://127.0.0.1:8000/assessments/assessment-details/'),
          axios.get('http://127.0.0.1:8000/assessments/awards-details/'),
          axios.get('http://127.0.0.1:8000/assessments/class-details/'),
          axios.get('http://127.0.0.1:8000/assessments/populate-summary/')
        ]);

        setSubjectData(subjectRes.data);
        setSchoolData(schoolRes.data);
        setAssessmentData(assessmentRes.data);
        setAwardData(awardRes.data);
        setClassData(classRes.data);
        setSummaryData(summaryRes.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="all-data-container">
      <h1>All Data</h1>
      <div className="table-section">
        <h2>Subject Details</h2>
        <table>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Average Score</th>
            </tr>
          </thead>
          <tbody>
            {subjectData.map((item, index) => (
              <tr key={index}>
                <td>{item.subject_name}</td>
                <td>{item.average_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-section">
        <h2>School Details</h2>
        <table>
          {/* Similar structure for School Details */}
        </table>
      </div>

      <div className="table-section">
        <h2>Assessment Areas</h2>
        <table>
          {/* Similar structure for Assessment Areas */}
        </table>
      </div>

      <div className="table-section">
        <h2>Awards Details</h2>
        <table>
          {/* Similar structure for Awards Details */}
        </table>
      </div>

      <div className="table-section">
        <h2>Class Details</h2>
        <table>
          {/* Similar structure for Class Details */}
        </table>
      </div>

      <div className="table-section">
        <h2>Summary</h2>
        <table>
          {/* Similar structure for Summary */}
        </table>
      </div>
    </div>
  );
};

export default AllDataPage;
