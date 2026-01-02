import React, { useState } from 'react';
import { Download, Send } from 'lucide-react';
import './EmploymentForm.css';

const EmploymentForm = () => {
    const [formData, setFormData] = useState({
        // Applicant Information
        lastName: '',
        firstName: '',
        middleInitial: '',
        date: '',
        streetAddress: '',
        apartmentUnit: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: '',
        secondaryPhone: '',
        email: '',

        // Employment Desired
        position: '',
        dateAvailable: '',
        salaryDesired: '',
        workedBefore: false,
        workedBeforeWhen: '',
        employedNow: false,

        // Availability
        availability: {
            monday: { start: '', end: '' },
            tuesday: { start: '', end: '' },
            wednesday: { start: '', end: '' },
            thursday: { start: '', end: '' },
            friday: { start: '', end: '' },
            saturday: { start: '', end: '' },
            sunday: { start: '', end: '' }
        },

        // Education
        highSchool: { name: '', years: '', graduated: '' },
        college: { name: '', years: '', graduated: '' },
        tradeSchool: { name: '', years: '', graduated: '' },

        // Former Employers (Up to 3)
        employers: [
            { start: '', end: '', name: '', salary: '', title: '', reason: '' },
            { start: '', end: '', name: '', salary: '', title: '', reason: '' },
            { start: '', end: '', name: '', salary: '', title: '', reason: '' }
        ]
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAvailabilityChange = (day, type, value) => {
        setFormData(prev => ({
            ...prev,
            availability: {
                ...prev.availability,
                [day]: {
                    ...prev.availability[day],
                    [type]: value
                }
            }
        }));
    };

    const handleEducationChange = (level, field, value) => {
        setFormData(prev => ({
            ...prev,
            [level]: {
                ...prev[level],
                [field]: value
            }
        }));
    };

    const handleEmployerChange = (index, field, value) => {
        const newEmployers = [...formData.employers];
        newEmployers[index] = { ...newEmployers[index], [field]: value };
        setFormData(prev => ({ ...prev, employers: newEmployers }));
    };

    const handleDownloadPDF = (e) => {
        e.preventDefault();
        const element = document.createElement("a");
        const file = new Blob(["FAST N FRIENDLY APPLICATION FORM\n\nName: ____________________\nDate: ____________________\n\n(This is a placeholder application form)"], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "FastNFriendly_Application.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Application Submitted Successfully! (This is a demo)");
    };

    return (
        <form className="employment-form" onSubmit={handleSubmit}>
            <div className="form-title">
                <span>Application for Employment</span>
                <button type="button" className="download-pdf-btn" onClick={handleDownloadPDF}>
                    <Download size={16} /> Download PDF Version
                </button>
            </div>

            {/* Applicant Information */}
            <div className="form-section">
                <h3 className="section-title">Applicant Information</h3>
                <div className="form-row three-col">
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Middle Initial</label>
                        <input type="text" name="middleInitial" maxLength="1" value={formData.middleInitial} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group" style={{ flex: 2 }}>
                        <label>Street Address</label>
                        <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                        <label>Apartment/Unit #</label>
                        <input type="text" name="apartmentUnit" value={formData.apartmentUnit} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-row three-col">
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>ZIP Code</label>
                        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-row three-col">
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Secondary Phone</label>
                        <input type="tel" name="secondaryPhone" value={formData.secondaryPhone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                </div>
            </div>

            {/* Employment Desired */}
            <div className="form-section">
                <h3 className="section-title">Employment Desired</h3>
                <div className="form-row three-col">
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" name="position" value={formData.position} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Date Available to Start</label>
                        <input type="date" name="dateAvailable" value={formData.dateAvailable} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Salary Desired</label>
                        <input type="text" name="salaryDesired" value={formData.salaryDesired} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Have you ever worked for this company? If so, when?</label>
                        <input type="text" name="workedBeforeWhen" value={formData.workedBeforeWhen} onChange={handleChange} placeholder="Leave blank if No" />
                    </div>
                    <div className="form-group">
                        <label>Are you employed now?</label>
                        <select name="employedNow" value={formData.employedNow} onChange={handleChange}>
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                        </select>
                    </div>
                </div>

                <h4 style={{ marginBottom: '1rem', marginTop: '1rem', color: '#000', fontWeight: 600, fontSize: '0.9rem' }}>Days/Hours Available</h4>
                <div className="availability-grid">
                    <div className="grid-header"></div>
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                        <div key={day} className="grid-header">{day}</div>
                    ))}

                    <div className="grid-row-label">Start</div>
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                        <input
                            key={`start-${day}`}
                            type="time"
                            value={formData.availability[day].start}
                            onChange={(e) => handleAvailabilityChange(day, 'start', e.target.value)}
                        />
                    ))}

                    <div className="grid-row-label">End</div>
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                        <input
                            key={`end-${day}`}
                            type="time"
                            value={formData.availability[day].end}
                            onChange={(e) => handleAvailabilityChange(day, 'end', e.target.value)}
                        />
                    ))}
                </div>
            </div>

            {/* Education History */}
            <div className="form-section">
                <h3 className="section-title">Education History</h3>
                {['highSchool', 'college', 'tradeSchool'].map((level) => (
                    <div key={level} className="education-entry">
                        <h4 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{level.replace(/([A-Z])/g, ' $1').trim()}</h4>
                        <div className="form-row three-col" style={{ marginBottom: 0 }}>
                            <div className="form-group" style={{ flex: 2 }}>
                                <label>Name & Location of School</label>
                                <input type="text" value={formData[level].name} onChange={(e) => handleEducationChange(level, 'name', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Years Attended</label>
                                <input type="text" value={formData[level].years} onChange={(e) => handleEducationChange(level, 'years', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Did you Graduate?</label>
                                <select value={formData[level].graduated} onChange={(e) => handleEducationChange(level, 'graduated', e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Former Employers */}
            <div className="form-section">
                <h3 className="section-title">Former Employers (Last 3)</h3>
                {formData.employers.map((employer, index) => (
                    <div key={index} className="employer-entry">
                        <div className="form-row" style={{ marginBottom: '0.5rem' }}>
                            <div className="form-group">
                                <label>Start Date</label>
                                <input type="date" value={employer.start} onChange={(e) => handleEmployerChange(index, 'start', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>End Date</label>
                                <input type="date" value={employer.end} onChange={(e) => handleEmployerChange(index, 'end', e.target.value)} />
                            </div>
                        </div>
                        <div className="form-row" style={{ marginBottom: '0.5rem' }}>
                            <div className="form-group" style={{ flex: 2 }}>
                                <label>Name of Employer</label>
                                <input type="text" value={employer.name} onChange={(e) => handleEmployerChange(index, 'name', e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Salary</label>
                                <input type="text" value={employer.salary} onChange={(e) => handleEmployerChange(index, 'salary', e.target.value)} />
                            </div>
                        </div>
                        <div className="form-row" style={{ marginBottom: 0 }}>
                            <div className="form-group">
                                <label>Job Title</label>
                                <input type="text" value={employer.title} onChange={(e) => handleEmployerChange(index, 'title', e.target.value)} />
                            </div>
                            <div className="form-group" style={{ flex: 2 }}>
                                <label>Reason for Leaving</label>
                                <input type="text" value={employer.reason} onChange={(e) => handleEmployerChange(index, 'reason', e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="submit-section">
                <button type="submit" className="submit-btn"><Send size={20} style={{ marginRight: '8px' }} /> Submit Application</button>
            </div>

            <div className="other-methods" style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                <p style={{ textAlign: 'center', margin: '0 0 1.5rem', color: '#000', fontWeight: 500 }}>Or submit your application via:</p>
                <div className="methods-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div className="method" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000' }}>
                        <a href="mailto:careers@fastnfriendly.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000', textDecoration: 'none' }}>
                            <Send size={20} style={{ color: 'var(--color-secondary)' }} />
                            <span>Email to: careers@fastnfriendly.com</span>
                        </a>
                    </div>
                    <div className="method" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#000' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ color: 'var(--color-secondary)' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <span>Drop off at <a href="/locations" style={{ color: 'var(--color-primary-dark)', textDecoration: 'underline' }}>any location</a></span>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmploymentForm;
