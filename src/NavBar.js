import React from 'react'

export default function NavBar() {
    return (
        <div className="navBar">
            <ul className="navMenu">
                <li className="navItems">
                    <a href="./pounds"><h3 className="link">lb => kg</h3></a>
                </li>
                <li className="navItems" >
                    <a href="./inches"><h3 className="link">in => m</h3></a>
                </li>
                <li className="navItems">
                    <a href="./bmi-standard"><h3 className="link">BMI Metric</h3></a>
                </li>
                <li className="navItems">
                    <a href="bmi-imperial"><h3 className="link">BMI Imperial</h3></a>
                </li>
                <li className="navItems">
                    <a href="./impact"><h3 className="link">Impact Force</h3></a>
                </li>
                <li className="navItems">
                    <a href="./potential"><h3 className="link">Fall Impact</h3></a>
                </li>
                <li className="navItems">
                    <a href="./pressure"><h3 className="link">Pressure</h3></a>
                </li>
                <li className="navItems">
                    <a href="./tax"><h3 className="link">Sales Tax</h3></a>
                </li>
                <li className="navItems">
                    <a href="./gamma"><h3 className="link">Lorentz Factor</h3></a>
                </li>
                <li className="navItems">
                    <a href="./restMass"><h3 className="link">E=mc<sup>2</sup></h3></a>
                </li>
                <li className="navItems">
                    <a href="./triangle"><h3 className="link">Triangle Area</h3></a>
                </li>
            </ul>
        </div>
    )
}
