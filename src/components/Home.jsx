import React from "react";
import BG1 from '../images/home/BG1.jpg'
import BG2 from '../images/home/BG2.jpg'
import BG3 from '../images/home/BG3.jpg'
import BG4 from '../images/home/BG4.jpg'
import '../styles/Home.css'


/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return <div>
            <div className={'wrapperImg'}>
                <div className={'divImage'}></div>
                <div className={'divText'}>Welcome To Gateway College</div>
                <div className={'divText2'}>Energize, Enlighten, Empower</div>

            </div>

            <div className={'aboutDiv'}>
                <div className={'box'}>
                    <label className={'custom-underline'}>ABOUT THE COLLAGE</label>
                </div>
                <p id={'para'}>
                    State of the art Campuses, high quality personalized teaching, a programme of learning that follows the English Curriculum in its entirety from
                    Foundation to Advanced Level, all benchmarked against a range of world class internationally recognized UK qualifications are just some of the ingredients
                    that have made Gateway College earn a reputation to be one of Sri Lanka’s premium educational institutions.
                </p>
            </div>
            <div id={'cardDiv'} data-aos={'fade-up'}>
                <div>
                    <div className={'box'}>
                        <label className={'custom-underline'}>Branches</label>
                    </div>
                    <div id={'cardInsideDiv'}>
                        <div className={'cardImg'} data-aos={'fade-up'}>
                            <div className={'info'}>
                                <h4 className={'title'}>Colombo </h4>
                                <p className={'description'}>Gate Way Collage Colombo
                                    185, Koswatta Road,
                                    (Via Parliment Road, Off Royal Gardens),
                                    Rajagiriya,
                                    Sri Lanka.</p>
                            </div>
                        </div>
                        <div className={'cardImg2'} data-aos={'fade-up'}>
                            <div className={'info2'}>
                                <h4 className={'title'}>Dehiwala</h4>
                                <p className={'description'}>Gate Way Collage Dehiwala
                                    85/1 Galwihara Road,
                                    Dehiwala.</p>
                            </div>
                        </div>
                        <div className={'cardImg3'} data-aos={'fade-up'}>
                            <div className={'info3'}>
                                <h4 className={'title'}>Kandy</h4>
                                <p className={'description'}>Gate Way Collage Kandy
                                    80, Wariyapola Sri Sumangala Mawatha,
                                    Asgiriya,
                                    Kandy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" >
                <div className={'box'}>
                    <label className={'custom-underline'}>THEME OF THE YEAR</label>
                </div>
                <div id={'venueTile'} data-aos={'fade-up'}>
                    <div id={'venueName'}>
                        <label id={'vNameCont'}>Brave The Present.Rise To The Future.</label>
                    </div>


                </div>
                <div id={'imageTileDiv'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG1+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage:"url("+BG2+")"}}/>
                    </div>
                </div>
                <div id={'imageTileDiv2'} data-aos={'fade-up'}>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG3+")"}}/>
                    </div>
                    <div className={'crd crd--effect'}>
                        <div className={'crd-img'} style={{backgroundImage: "url("+BG4+")"}}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;
