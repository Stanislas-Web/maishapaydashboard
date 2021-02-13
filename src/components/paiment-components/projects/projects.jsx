import React from "react";

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table,
    Button,
    Alert
} from 'reactstrap';

const Projects = () => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        <Card>

            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        
                        <h3 style={{marginBottom: "20px"}}>
                                Paiements
                                </h3>
                        
                    </div>
                    <div className="ml-auto d-flex no-block align-items-center">
                        <div className="dl">
                            <Input type="select" className="custom-select">
                                <option value="0">Monthly</option>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="3">Yearly</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">Montant</th>
                            <th className="border-0">Description</th>

                            <th className="border-0">STATUT</th>
                            <th className="border-0">CLIENT</th>
                            <th className="border-0">DATE</th>
                            <th className="border-0"></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>100 $</td>
                       
                            <td>Remboursement des ...</td>

                            <td>
                                <Alert color="primary" style={{height: "30px", padding:"0", display:"flex",justifyContent:"center", alignItems:"center"}}>
                                Remboursé
                                </Alert>

                            </td>
                            
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td className="blue-grey-text  text-darken-4 font-medium">2 Janvier à 12h</td>
                            <td><i className="ti-more-alt"></i></td>
                        </tr>
                        <tr>
                            <td>280 $</td>
                       
                            <td>Mon premier projet</td>

                            <td>
                                <Alert color="success" style={{height: "30px", padding:"0", display:"flex",justifyContent:"center", alignItems:"center"}}>
                                Réussi
                                </Alert>

                            </td>
                            
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Hanna Gover</h5><span>hgover@gmail.com</span></div>
                                </div>
                            </td>
                            <td className="blue-grey-text  text-darken-4 font-medium">20 Février à 17h</td>
                            <td><i className="ti-more-alt"></i></td>
                        </tr>
                        <tr>
                            <td>1300 $</td>
                       
                            
                            <td>pi_lopahdngfildjeedy...</td>

                            <td>
                            <Alert color="primary" style={{height: "30px", padding:"0", display:"flex",justifyContent:"center", alignItems:"center"}}>
                                Remboursé
                                </Alert>

                            </td>
                            
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Julian Josephs</h5><span>josephs@gmail.com</span></div>
                                </div>
                            </td>
                            <td className="blue-grey-text  text-darken-4 font-medium">12 Janvier à 17h</td>
                            <td><i className="ti-more-alt"></i></td>
                        </tr>
                        <tr>
                            <td>10 $</td>
                       
                            <td>pi_ikfnfmpPPSffgggy...</td>

                            <td>
                            <Alert color="success" style={{height: "30px", padding:"0", display:"flex",justifyContent:"center", alignItems:"center"}}>
                                Réussi
                                </Alert>

                            </td>
                            
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Helène Mabaka </h5><span>mabhelene@gmail.com</span></div>
                                </div>
                            </td>
                            <td className="blue-grey-text  text-darken-4 font-medium">1 Février à 20h</td>
                            <td><i className="ti-more-alt"></i></td>
                        </tr>
                    
                
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
