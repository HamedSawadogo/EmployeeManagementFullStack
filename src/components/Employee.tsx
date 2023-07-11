import React from "react";
import EmployeeInterface from "./EmployeeInterface";

interface EmployeeProps {
  employee: EmployeeInterface;
}

const Employee: React.FC<EmployeeProps> = ({ employee }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="fw-bold mb-1">
              {employee.firstName.toUpperCase()}{" "}
              {employee.lastName.toLocaleLowerCase()}
            </p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{employee.email}</p>
      </td>
      <td>
        <p className="fw-normal mb-1">{employee.phone}</p>
      </td>

      <td>{employee.service}</td>
      <td>{employee.salaireBase} XOF</td>
      <td>
        <button type="button" className="btn btn-danger">
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default Employee;
