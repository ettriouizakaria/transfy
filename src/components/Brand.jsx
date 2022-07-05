import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BrandImg from "../images/brand.png";

function Brand() {
    return (
        <div className="brand">
            <span>
                <Link to="/" >
                    <img src={BrandImg} alt="Transfy brand" />
                </Link>
            </span>
            {/* Transfy */}
        </div>
    );
}

export default Brand;