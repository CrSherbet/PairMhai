import React , {Component} from 'react'
import '../CSS/Highlight.css';

class Highlight extends Component {

    render(){
        

        return (
            
            <div className="container-fluid">
                <div className="row">
            <div className="hl-content-logo"> 
                <img className="hl-center"src={ require('../img/logomain.png') } width="100%"/>
                <p className="hl-text-center"><a className="btn btn-primary btn-lg " href="/home" role="button">Home</a></p>
            </div>
           
            <div className="hl-content-promotion">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExample" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIn" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" width="100%" height="100%" src={ require('../img/promotion1.jpg') } alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" width="100%" height="100%" src={ require('../img/promotion2.jpg') } alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" width="100%" height="100%" src={ require('../img/logomain.png') } alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default Highlight