import React from "react";
import NavBar from "../component/header/NavBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import ImageHeader from "../component/header/ImageHeader";
import { Col, Container, Row } from "react-bootstrap";
import Nav_Details from "../component/header/Nav_Details";
import ItemThreeImage from "../component/header/ItemThreeImage";
class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" >
                        <NavBar></NavBar>
                        <div style={{position:'relative'}}>
                        <div>
                        <ImageHeader></ImageHeader>
                        </div>
                        <div  style={{position:'absolute',top:'30px', left:'200px',}}>
                        <Nav_Details></Nav_Details>
                        </div >
                        <div style={{position:'absolute',top:'350px', left:'50px',}}>
                        <ItemThreeImage></ItemThreeImage>
                        </div>
                        
                        </div>
                        

                    </Route>
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Home;