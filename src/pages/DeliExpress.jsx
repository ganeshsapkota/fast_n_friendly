import React from 'react';
import { Link } from 'react-router-dom';
import './DeliExpress.css';

// Using Wikimedia Commons images as reliable placeholders
const imgCornDogs = "https://upload.wikimedia.org/wikipedia/commons/e/e8/Corn_dogs.jpg";
const imgBiscuits = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Biscuits_and_gravy.jpg";
const imgChiliDogs = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Chili_dog_with_fries.jpg";

const DeliExpress = () => {
    return (
        <div className="page-deli">
            <header className="deli-header">
                <h1 className="deli-title">Deli Express</h1>
            </header>

            {/* Section 1: Customer Favorites (Image Left) */}
            <section className="deli-section">
                <div className="deli-image-container">
                    <img src={imgCornDogs} alt="Corn Dogs" className="deli-image" />
                </div>
                <div className="deli-content">
                    <h2 className="deli-subtitle">Customer Favorites</h2>
                    <p className="deli-text">
                        Day in and day out, Fast n' Friendly Deli Express cooks up food that
                        keeps you coming back for more. Our most popular items are
                        featured on the Fast n' Friendly 2- For Menu. Burritos, corn dogs,
                        crispitos, and egg rolls... your everyday favorites at every day low
                        prices.
                    </p>
                </div>
            </section>

            {/* Section 2: Rise & Shine (Text Left) */}
            <section className="deli-section reverse">
                <div className="deli-content">
                    <h2 className="deli-subtitle">Rise & Shine</h2>
                    <p className="deli-text">
                        We've got breakfast... hot, fresh, and ready for you! Crispy hash
                        browns, hearty breakfast sandwiches, and stick to your ribs biscuits
                        and gravy. Make Fast n' Friendly your one stop morning shop.
                    </p>
                </div>
                <div className="deli-image-container">
                    <img src={imgBiscuits} alt="Biscuits and Gravy" className="deli-image" />
                </div>
            </section>

            {/* Section 3: Chili Dog Tuesdays (Image Left) */}
            <section className="deli-section">
                <div className="deli-image-container">
                    <img src={imgChiliDogs} alt="Chili Dogs" className="deli-image" />
                </div>
                <div className="deli-content">
                    <h2 className="deli-subtitle">Chili Dog Tuesdays</h2>
                    <p className="deli-text">
                        Tuesdays at Fast n' Friendly mean only one thing... Chili Dogs! For over
                        a decade we have been bringing you Chili Dog Tuesday each and every
                        week. Plump, juicy hot dogs smothered in a thick, meaty chili sauce
                        and served on a soft, fresh bun. An American classic, two for just
                        $2.00. Get this each and every Tuesday at Fast n' Friendly's Deli
                        Express.
                    </p>
                </div>
            </section>

            {/* Nutrition Grid */}
            <section className="deli-nutrition">
                <div className="nutrition-grid">
                    {/* Item 1 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Crispito</span>
                            <span className="nutrition-calories">Calories: 205</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 11g<br />
                            Cholesterol: 20mg<br />
                            Sodium: 440mg<br />
                            Total Carbohydrates: 19g<br />
                            Protein: 8g<br />
                            <span className="contains-text">CONTAINS: WHEAT, MILK</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Egg Roll</span>
                            <span className="nutrition-calories">Calories: 180</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 9g<br />
                            Cholesterol: 10mg<br />
                            Sodium: 490mg<br />
                            Total Carbohydrates: 20g<br />
                            Protein: 7g<br />
                            <span className="contains-text">CONTAINS: WHEAT, SOY, EGGS, ANCHOVY</span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Munchers/ 10 per order</span>
                            <span className="nutrition-calories">Calories: 380</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 16g<br />
                            Cholesterol: 10mg<br />
                            Sodium: 1120mg<br />
                            Total Carbohydrates: 54g<br />
                            Protein: 8g<br />
                            <span className="contains-text">CONTAINS: WHEAT, MILK</span>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Pizza Stick</span>
                            <span className="nutrition-calories">Calories: 200</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 8g<br />
                            Cholesterol: 10mg<br />
                            Sodium: 440mg<br />
                            Total Carbohydrates: 28g<br />
                            Protein: 6g<br />
                            <span className="contains-text">CONTAINS: WHEAT, SOY, EGG, MILK</span>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Mushrooms/ 10 per order</span>
                            <span className="nutrition-calories">Calories: 240</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 10g<br />
                            Cholesterol: 0mg
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="nutrition-item">
                        <div className="nutrition-row">
                            <span className="nutrition-name">Mac n Chz Bites/8 per order</span>
                            <span className="nutrition-calories">Calories: 400</span>
                        </div>
                        <div className="nutrition-details">
                            Total Fat: 24g<br />
                            Cholesterol: 10mg
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="deli-footer">
                <p className="contact-text">For additional information please email us.</p>
                <Link to="/contact" className="btn-contact">CONTACT US</Link>
                <p className="copyright">Copyright © 2017 Fast n' Friendly Convenience Stores - All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default DeliExpress;
