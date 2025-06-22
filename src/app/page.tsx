"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/ui/NavBar";
import Main from "../components/ui/Main";



export default function Home() {
  const [employees, setEmployees ] = useState<React[]>([])
  interface React {
    employee: string,
    department: string,
    title: string,
  }

  useEffect(() => {
    const employeesListUrl = 'http://localhost:8000/posts/'
    axios.get<React[]>(employeesListUrl)
      .then(response => setEmployees(response.data))
      .catch(error => console.error('Error fetching employees:', error))
  }, [])

  

  return(<>
    
    {/* <NavBar></NavBar> */}
    <div>
    {employees.map((employee, index) => (
      <div key= {index} className="text-black"> Employee: {employee.employee} Department: {employee.department} Title: {employee.title}</div>
    ))}
    </div>
    {/* <Main></Main> */}
    <div>
    {employees.map((employee, index) => (
      <div key= {index} className="text-black"> Employee: {employee.employee} Department: {employee.department} Title: {employee.title}</div>
    ))}
    </div>
    </>
  );
}
