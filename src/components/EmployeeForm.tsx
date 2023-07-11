import React, { useState } from "react";
import EmployeeInterface from "./EmployeeInterface";
import axios from "axios";

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [salaire, setSalaire] = useState("");
  const [fonction, setFonction] = useState("");
  const [error, setError] = useState<boolean | any>("");

  const postEmployeeData = async (data: EmployeeInterface) => {
    const path: string = "http://localhost:9000/employee/add" + data;
    console.log(path);

    axios
      .post("http://localhost:9000/employee/add", data)
      .then(() => setError(false))
      .catch(() => setError(true));
  };
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const employee: EmployeeInterface = {
      firstName,
      lastName,
      email,
      phone,
      salaireBase: parseFloat(salaire),
      service: fonction,
    };
    if (firstName.length > 2 && lastName.length > 2) {
      postEmployeeData(employee);
      setEmail("");
      setFirstName("");
      setPhone("");
      setFonction("");
      setSalaire("");
      setLastName("");
    } else {
      setError(true);
    }
  };
  return (
    <div className="container">
      {error ? (
        <div className="alert alert-danger mt-3" role="alert">
          Une erreur est survenue
        </div>
      ) : (
        <div className="alert alert-success mt-3" role="alert">
          Enregistré avec success!
        </div>
      )}
      <h3 className="mt-3 mb-3">Enregistrement Employee</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="text">Nom de l'employee</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="nom de l'employee"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Prenom de l'employee</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="prenom de l'employee"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email de l'employee</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email de l'employee"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">telephone de l'employee</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="nom de l'employee"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="form-group">
            <label htmlFor="text">Salaire de l'employee</label>
            <input
              type="text"
              className="form-control"
              placeholder="Salaire de l'employee"
              value={salaire}
              onChange={(e) => setSalaire(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Fonction de l'Employee</label>
            <input
              type="text"
              className="form-control"
              placeholder="fonction de l'employee"
              value={fonction}
              onChange={(e) => setFonction(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-warning mt-3">
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
