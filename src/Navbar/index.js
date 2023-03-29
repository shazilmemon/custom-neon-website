import React, { useState } from 'react'
import styles from "./style.module.css"
import logo from "../neonlogo/CustomNeonLogo.png"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    // const [show, setShow] = useState(true)
    // const handleShow = () => {
    //     setShow(!show)
    
    return (
        <>
            {/* <div className={styles.navParent}>
                <ul>
                    <li>Home</li>
                    <li>Design Your own Sign</li>
                    <li>Get A Qoute</li>
                    <li><img src={logo} width="150" /></li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>

            </div>
            <div className={styles.navParentRes}>

                <section>
                    <FaBars onClick={handleShow} />
                </section>
                <section>
                    <img src={logo} width="150" />
                </section>

            </div>
            <div style={{
                zIndex: show ? 1 : 0,
                visibility: show ? "visible" : "hidden"
            }}>
                <ul>
                    <li>Home</li>
                    <li>Design Your own Sign</li>
                    <li>Get A Qoute</li>

                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div> */}
            {/* <div style={{zIndex:2, border: "1px solid red", width:show? "150px" : "0", minHeight: "100vh",transition:"1s" }} onClick={() => setShow(false)}>

                <div style={{display:"flex",flexDirection:"column",width:!show?"150px":"0"}}>
                    <span>home</span>
                    <span>about</span>
                    <span>content</span>
                    <span>pages</span>
                    <span>blogs</span>
                </div>
                <h1 style={{ float: "right" }}>x</h1>
                <FaBars onClick={ setShow(true)} />

            </div> */}
        </>
    )
}

export default Navbar