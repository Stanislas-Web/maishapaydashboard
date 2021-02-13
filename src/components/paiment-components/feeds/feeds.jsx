import React from "react";
import {
    Card,
    CardBody,
    Button,
} from 'reactstrap';

const Feeds = () => {
    return (
        <>
               
        <Card style={{height:"300px"}}>
            <CardBody>
                {/* <CardTitle className="text-center">Soldes</CardTitle> */}
                <br/>
                
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <h6>Solde en USD</h6>
                       
                        <li className="feed-item">
                             <h4>1000,00 $</h4>  <span className="ml-auto font-12 text-muted"> <a href="" style={{color:"blue"}}>Afficher les details</a></span>
                        </li>
                        
                             <span className="ml-auto font-12 text-muted">Disponible pour virements</span>
                        
                        <br/> <br/> 
                        <h6>Virements</h6>
                        <li className="feed-item">
                             <h4>90,0 $</h4>  <span className="ml-auto font-12 text-muted"> <a href="" style={{color:"blue"}}>Afficher les details</a></span>
                        </li>
                        {/* <li className="feed-item">
                            <div className=""><i className="ti-wallet"></i></div> Server #1 overloaded.<span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li> */}
                        
                             <span className="ml-auto font-12 text-muted">Versé le 10 Janvier</span>
                        
                        {/* <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> New user registered.<span className="ml-auto font-12 text-muted">30 May</span>
                        </li> */}
                    </ul>
                </div>
            </CardBody>

            
        </Card>
        </>

        
    );
}

export default Feeds;
