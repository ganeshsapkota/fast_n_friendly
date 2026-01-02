import React, { useState } from 'react';
import { Target, Users, Globe, Mail, Phone, MapPin } from 'lucide-react';
import './About.css';

const About = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you shortly.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page-about">
            <div className="container">
                {/* Intro Section */}
                <section className="about-intro">
                    <h1 className="text-gradient">About FuelStop</h1>
                    <p className="intro-text">
                        Since 1995, we've been dedicated to fueling journeys and refreshing lives.
                        From a single pump in Texas to over 500 locations nationwide, our mission remains the same:
                        Quality service, clear prices, and good vibes.
                    </p>
                </section>

                {/* Values Section */}
                <section className="about-values">
                    <div className="value-card">
                        <Target size={48} className="value-icon" />
                        <h3>Our Mission</h3>
                        <p>To provide a premium pit-stop experience that energizes both you and your vehicle.</p>
                    </div>
                    <div className="value-card">
                        <Users size={48} className="value-icon" />
                        <h3>Community First</h3>
                        <p>We hire local, support local charities, and ensure our stations are safe havens.</p>
                    </div>
                    <div className="value-card">
                        <Globe size={48} className="value-icon" />
                        <h3>Sustainability</h3>
                        <p>Leading the charge with 100% renewable energy for our EV network by 2030.</p>
                    </div>
                </section>

                {/* Franchising Section */}
                <section className="franchising-section">
                    <div className="franchise-content">
                        <h2>Partner With Us</h2>
                        <p>Interested in owning a FuelStop franchise? Join the fastest growing premium convenience network.</p>
                        <ul className="franchise-benefits">
                            <li>Proven business model</li>
                            <li>Comprehensive training</li>
                            <li>Marketing support</li>
                        </ul>
                        <button className="btn-primary">Request Franchise Info</button>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <div className="info-item">
                                <MapPin size={20} />
                                <span>123 Energy Blvd, Houston, TX 77001</span>
                            </div>
                            <div className="info-item">
                                <Phone size={20} />
                                <span>(555) 123-4567</span>
                            </div>
                            <div className="info-item">
                                <Mail size={20} />
                                <span>support@fuelstop.com</span>
                            </div>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Send us a Message</h3>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-secondary">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
