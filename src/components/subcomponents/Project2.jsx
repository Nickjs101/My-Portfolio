import React from 'react';
import SQL1 from '../../assets/SQL/Picture1.png';
import SQL2 from '../../assets/SQL/Picture2.png';
import SQL3 from '../../assets/SQL/Picture3.png';
import SQL4 from '../../assets/SQL/Picture4.png';
import SQL5 from '../../assets/SQL/Picture5.png';
import SQL6 from '../../assets/SQL/Picture6.png';

const Project2 = () => {
  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col justify-center items-center ">
      <div className="max-w-4xl mx-auto p-0 md:p-6 shadow-lg rounded-lg secondary-color">
        
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white rounded-lg">Apply Filters to SQL Queries</h1>
        <h2 className="text-xl font-semibold mb-2">Project Description</h2>
        <p className="mb-4 ">My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.</p>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve After Hours Failed Login Attempts</h3>
        <p className="mb-4 ">There was a potential security incident that occurred after business hours (after 18:00). I need to investigate all failed login attempts after business hours.</p>
        <img src={SQL1} alt="Retrieve After Hours Failed Login Attempts" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve Login Attempts on Specific Dates</h3>
        <p className="mb-4 ">A suspicious event occurred on 2022-05-09. Any login activity that happened on 2022-05-09 and on the day before needs to be investigated.</p>
        <img src={SQL2} alt="Retrieve Login Attempts on Specific Dates" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve Login Attempts Outside of Mexico</h3>
        <p className="mb-4 ">After investigating the organization’s data on login attempts, it was determined that there is an issue with the login attempts that occurred outside of Mexico. These login attempts should be investigated.</p>
        <img src={SQL3} alt="Retrieve Login Attempts Outside of Mexico" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve Employees in Marketing</h3>
        <p className="mb-4 ">My team wants to update the computers of certain employees in the marketing department. To do this, I have to get the information on which employee machines need to get updated.</p>
        <img src={SQL4} alt="Retrieve Employees in Marketing" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve Employees in Finance or Sales</h3>
        <p className="mb-4 ">The computers of employees in the Finance and Sales departments also need to be updated. Since a different security update is needed, I need to get information on employees only from these two departments.</p>
        <img src={SQL5} alt="Retrieve Employees in Finance or Sales" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h3 className="text-lg font-semibold mb-2 text-white">Retrieve All Employees Not in IT</h3>
        <p className="mb-4 ">My team needs to make one more security update on employees who are not in the Information Technology Department. To make this update, I need to get information on these employees.</p>
        <img src={SQL6} alt="Retrieve All Employees Not in IT" className="w-full h-auto mb-6 rounded-lg"/>

        <h3 className="text-lg font-semibold mb-2 text-white">Summary</h3>
        <p className="mb-4 ">I applied filters to SQL queries to get specific information on login attempts and employee machines. I used two different tables: log_in_attempts and employees. I used the AND, OR, and NOT operators to filter for specific information needed for each task. I also used LIKE and the percentage sign (%) wildcard to filter for patterns.</p>
      </div>
    </div>
  );
};

export default Project2;
