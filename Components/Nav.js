import React from 'react'
import { Navbar, Dropdown } from "flowbite-react";

function Nav() {
    return (
        <>

            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/"
                style={{color:"black"}}>
                    <h1>INI BERITA</h1>

                </Navbar.Brand>
                <div className="flex md:order-2">
                   

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/Home"
                        style={{color:"black", paddingTop:"10px"}}
                    >
                        Home
                    </Navbar.Link>
                    <Dropdown
                        label={"Category"}
                        style={{ color: "black", background: "transparent" }}
                    >
                        <Dropdown.Item>
                        <option value="Ready">Politics</option>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <option value="Ready">Health</option>    
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <option value="Ready">Entertaiment</option>                           
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <option value="Ready">Sports</option>                          
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Link href="/navbars"
                    style={{color:"black", paddingTop:"10px"}}
                    >
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

            
        </>
    )
}

export default Nav