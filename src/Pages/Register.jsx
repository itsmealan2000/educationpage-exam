import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { addStudentAPI } from "../Services/Allapi";

function Register() {
    const [registerData, SetRegisterData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        gender: "",
        mobile: "",
        password: "",
        dateofBirth: "",
        course: ""
    });
    const [selectedOption, setSelectedOption] = useState();

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        SetRegisterData({ ...registerData, gender: selectedOption });
    }, [selectedOption]);

    console.log(registerData);

    const handleRegister = async () => {
        const { firstName, lastName, address, email, gender, mobile, password, dateofBirth, course } = registerData;

        if (!firstName || !lastName || !address || !email || !gender || !mobile || !password || !dateofBirth || !course) {
            alert("Please fill the form completely!!!");
        } else {
            try {
                const result = await addStudentAPI(registerData);

                if (result.status === 200) {
                    console.log(result.data);
                } else {
                    console.log(result.response.data);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <>
           <div  className="container-fluid pagebody mt-4 mb-4 rounded rounded-5">
                <div className="row">
                    <div className="col-3  d-flex flex-column justify-content-center ">
                        <h2 className="text-center  fw-bolder">Welcome</h2>
                        <h5 className="text-center fw-bold  text-white ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore quibusdam soluta perspiciatis mollitia totam debitis cumque nihil dolorum.
                        </h5>
                        <Link to={'/'} className="d-flex justify-content-center text-decoration-none ">
                            <button className="btn btn-danger ">Go Back</button>
                        </Link>
                    </div>
                    <div className="col-9 mt-5 bg-light formleft p-5">
                        <h1 className="text-center">Apply as a Student</h1>
                        <div className="row">
                            <div className="col-6 ">
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" onChange={e => SetRegisterData({ ...registerData, firstName: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" onChange={e => SetRegisterData({ ...registerData, lastName: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={e => SetRegisterData({ ...registerData, address: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" onChange={e => SetRegisterData({ ...registerData, email: e.target.value })} />
                                </Form.Group>
                                <div className="container">
                                    <p>Gender</p>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="options"
                                            value="Male"
                                            checked={selectedOption === 'Male'}
                                            onChange={handleOptionChange}
                                        />
                                        <label className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="options"
                                            value="Female"
                                            checked={selectedOption === 'Female'}
                                            onChange={handleOptionChange}
                                        />
                                        <label className="form-check-label">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 px-5 ">
                                <Form.Group className="mb-3" controlId="mobile">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" onChange={e => SetRegisterData({ ...registerData, mobile: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={e => SetRegisterData({ ...registerData, password: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="dateOfBirth">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control type="date" onChange={e => SetRegisterData({ ...registerData, dateofBirth: e.target.value })} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Course</Form.Label>
                                    <Form.Select onChange={e => SetRegisterData({ ...registerData, course: e.target.value })} aria-label="Default select example">
                                        <option defaultValue={"Course"}>Course</option>
                                        <option value="Science">Science</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Humanities">Humanities</option>
                                    </Form.Select>
                                </Form.Group>
                                <button onClick={handleRegister} className="btn btn-primary w-50 mt-5"><a href="/students" className="nav-link active">Register</a></button>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
}

export default Register;
