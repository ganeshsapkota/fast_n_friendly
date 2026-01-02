import React, { useState, useEffect } from 'react';
import AgeVerificationModal from '../components/AgeVerificationModal';
import ProductCard from '../components/ProductCard';
import './TobaccoPromotions.css';

import cigaretteRed from '../assets/products/cigarette_red.png';
import cigaretteMenthol from '../assets/products/cigarette_menthol.png';
import cigarRobusto from '../assets/products/cigar_robusto.png';
import cigarillo from '../assets/products/cigarillo.png';
import pipeTobacco from '../assets/products/pipe_tobacco.png';
import dipCan from '../assets/products/dip_can.png';

const TobaccoPromotions = () => {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        // Optional: Check if previously verified in session storage
        const verified = sessionStorage.getItem('tobaccoAgeVerified');
        if (verified === 'true') {
            setIsVerified(true);
        }
    }, []);

    const handleVerify = () => {
        setIsVerified(true);
        sessionStorage.setItem('tobaccoAgeVerified', 'true');
    };

    const categories = {
        cigarettes: [
            { id: 1, name: "Premium Red", price: 9.49, description: "Traditional full flavor.", image: cigaretteRed },
            { id: 2, name: "Smooth Menthol", price: 9.49, description: "Crisp and refreshing.", image: cigaretteMenthol },
            { id: 3, name: "Clove Blend", price: 10.99, description: "Exotic spicy aroma.", image: cigaretteRed }
        ],
        cigars: [
            { id: 10, name: "Handmade Robusto", price: 14.99, description: "Premium imported leaf.", image: cigarRobusto },
            { id: 11, name: "Sweet Cigarillos", price: 1.49, description: "2-Pack foil pouch.", image: cigarillo },
            { id: 12, name: "Classic Zipp", price: 29.99, description: "Windproof lighter.", image: cigarRobusto }
        ],
        pipe: [
            { id: 20, name: "Cherry Cavendish", price: 12.99, description: "16oz Bag - Aromatic.", image: pipeTobacco },
            { id: 21, name: "English Blend", price: 15.99, description: "Tin - Latakia heavy.", image: pipeTobacco }
        ],
        smokeless: [
            { id: 30, name: "Long Cut Mint", price: 6.99, description: "Moist snuff.", image: dipCan },
            { id: 31, name: "Nicotine Pouches 6mg", price: 5.99, description: "Tobacco-free pouches.", image: dipCan },
            { id: 32, name: "Classic Chewing Tobacco", price: 7.49, description: "Loose leaf blend.", image: dipCan }
        ],
        ryo: [
            { id: 40, name: "Rolling Tobacco", price: 11.99, description: "Organic blend.", image: pipeTobacco },
            { id: 41, name: "Hemp Papers", price: 2.99, description: "Natural unrefined.", image: cigarillo },
            { id: 42, name: "Filter Tips", price: 1.99, description: "Bag of 200.", image: cigarillo }
        ],
        hookah: [
            { id: 50, name: "Blueberry Mint Shisha", price: 14.99, description: "250g Jar.", image: pipeTobacco },
            { id: 51, name: "Charcoal Cubes", price: 5.99, description: "Natural coconut coal.", image: cigarRobusto },
            { id: 52, name: "Single Hose Hookah", price: 45.99, description: "Glass base style.", image: pipeTobacco }
        ],
        vapes: [
            { id: 60, name: "Disposable 5000", price: 18.99, description: "Mango Ice.", image: cigaretteMenthol },
            { id: 61, name: "Pod Kit System", price: 29.99, description: "Rechargeable.", image: cigaretteMenthol },
            { id: 62, name: "Vape Juice 60ml", price: 12.99, description: "Blue Raspberry.", image: cigaretteMenthol }
        ],
        accessories: [
            { id: 70, name: "Torch Lighter", price: 9.99, description: "Wind resistant.", image: cigarillo },
            { id: 71, name: "Humidor Travel Case", price: 24.99, description: "Holds 5 cigars.", image: cigarRobusto },
            { id: 72, name: "Pipe Tools", price: 4.99, description: "Tamper & Cleaner set.", image: pipeTobacco }
        ]
    };

    return (
        <div className="page-tobacco">
            {!isVerified && <AgeVerificationModal onVerify={handleVerify} />}

            <div className="legal-warning">
                Warning: This product contains nicotine. Nicotine is an addictive chemical.
            </div>

            <div className="tobacco-hero">
                <div className="container">
                    <h1 className="text-gradient">Tobacco Promotions</h1>
                    <p className="hero-subtitle">Premium Selections & Special Offers</p>
                </div>
            </div>

            {isVerified && (
                <div className="container tobacco-content">
                    {/* Cigarettes Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Cigarettes</h2>
                        <div className="category-grid">
                            {categories.cigarettes.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Cigars Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Cigars</h2>
                        <p className="category-subtitle">Premium Handmade, Machine-Made, Cigarillos & Filtered</p>
                        <div className="category-grid">
                            {categories.cigars.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Pipe Tobacco Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Pipe Tobacco</h2>
                        <div className="category-grid">
                            {categories.pipe.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Smokeless Tobacco Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Smokeless Tobacco</h2>
                        <p className="category-subtitle">Dip, Snus, Chew & Nicotine Pouches</p>
                        <div className="category-grid">
                            {categories.smokeless.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* RYO Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Roll-Your-Own Supplies</h2>
                        <div className="category-grid">
                            {categories.ryo.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Hookah Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Hookah & Shisha</h2>
                        <div className="category-grid">
                            {categories.hookah.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Vapes Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Vapes & E-Cigs</h2>
                        <div className="category-grid">
                            {categories.vapes.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Accessories Section */}
                    <div className="tobacco-category">
                        <h2 className="category-title">Accessories</h2>
                        <div className="category-grid">
                            {categories.accessories.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    <div className="tobacco-disclaimer">
                        <h3>SURGEON GENERAL'S WARNING:</h3>
                        <p>
                            Smoking Causes Lung Cancer, Heart Disease, Emphysema, And May Complicate Pregnancy.
                            <br /><br />
                            Quitting Smoking Now Greatly Reduces Serious Risks to Your Health.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TobaccoPromotions;
