import React from "react";
import EmployeeInterface from "./EmployeeInterface";
import Employee from "./Employee";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fonctions, setFonctions] = useState<string[]>([]);
  const [fonction, setFonction] = useState<string>("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      axios.get(url).then((res) => {
        setEmployees(res.data);
        setLoading(false);
      });
    };
    let url: string = "http://localhost:9000/employees";
    fetchData(url);
  }, []);

  useEffect(() => {
    const fonctionsArray: string[] = employees?.map((empl) => empl.service);
    let fonctionsFiltered: string[] = Array.from(new Set(fonctionsArray));
    setFonctions(fonctionsFiltered);
  }, [employees]);

  return !loading ? (
    <div className="container  mt-3">
      <div className="mt-3 mb-3 w-25">
        <select
          className="form-select"
          aria-label="Default select"
          value={fonction}
          onChange={(e) => setFonction(e.target.value)}
        >
          {/* dynamiser le tri */}
          {fonctions.map((f, key) => (
            <option key={key}>{f}</option>
          ))}
        </select>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Nom</th>
            <th>email</th>
            <th>telephone</th>
            <th>Fonction</th>
            <th>Salaire</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            ?.filter((employee) => employee.service.includes(fonction))
            .map((employee: EmployeeInterface) => (
              <Employee employee={employee} key={employee.id} />
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container d-flex justify-content-center mt-3">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Employees;
