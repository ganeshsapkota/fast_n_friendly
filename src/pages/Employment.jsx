import React from 'react';
import { Download, Mail, MapPin, Users, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmploymentForm from '../components/EmploymentForm';
import './Employment.css';

const Employment = () => {
    return (
        <div className="page-employment">
            <div className="employment-hero">
                <div className="container">
                    <h1 className="text-gradient">Join Our Team</h1>
                    <p className="hero-subtitle">Fast n' Friendly Employment</p>
                </div>
            </div>

            <div className="container employment-content">
                <div className="intro-section">
                    <p className="lead-text">
                        A dedicated team is one of the most important parts of our business and we're always looking for cheerful, dependable employees committed to customer service.
                    </p>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <Heart className="benefit-icon" />
                            <h3>Family Friendly</h3>
                            <p>We proudly offer a work environment that respects family time.</p>
                        </div>
                        <div className="benefit-card">
                            <Clock className="benefit-icon" />
                            <h3>Flexible Shifts</h3>
                            <p>Set work schedules with consecutive days off.</p>
                        </div>
                        <div className="benefit-card">
                            <Users className="benefit-icon" />
                            <h3>Great Benefits</h3>
                            <p>Competitive wages, paid vacation, health/dental & more.</p>
                        </div>
                    </div>

                    <div className="full-description">
                        <p>
                            We proudly offer a family friendly work environment by providing set work schedules with consecutive days off and accommodating shifts for personal leave time, allowing employees to more easily balance work and family obligations.
                        </p>
                        <p>
                            Our team members enjoy competitive wages, paid vacations, retirement plan with company match, health insurance, dental insurance, weekly pay and opportunity for advancement within a well respected, locally owned company.
                        </p>
                    </div>
                </div>

                <div className="application-section">
                    <EmploymentForm />
                </div>
            </div>
        </div>
    );
};

export default Employment;
