function StudentList() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 45 },
    { id: 3, name: "Ahmed", score: 60 },
    { id: 4, name: "Ayesha", score: 35 }
  ];

  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.name} - Score: {student.score} -{" "}
            {student.score >= 50 ? (
              <span style={{ color: "green" }}>Pass</span>
            ) : (
              <span style={{ color: "red" }}>Fail</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;