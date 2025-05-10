import React, { useState } from 'react';

function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
  const [newName, setNewName] = useState('');

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (newName.trim() === '') return;

    const newStudent = {
      id: Date.now(), // Unique ID based on timestamp
      name: newName,
    };

    setStudents([...students, newStudent]);
    setNewName('');
  };

  return (
    <div>
      <h2>Student List</h2>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          placeholder="Enter student name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} (ID: {student.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;


import React from 'react';

function StudentList() {
  const students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name} (ID: {student.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
