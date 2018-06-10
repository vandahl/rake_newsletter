import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Container from "../components/container";

const SubPageContainer = styled.div`
    
   
`;

const Navigation = styled.div`
    padding: 0.3em 3em;
    font-size: 0.8em;
    text-transform: uppercase;
    background-color: #eee;
`;

const SubPageHeader = styled.div`
    background-color: #364f74;
    color: white; 
    margin: 0 auto;
    padding: 1em 2em;
    font-size: 1.4em;
    
`;

const TekstiOsa = styled.div`
    font-size: 1.2em;
`;

const MainText = styled.div`
    margin: 0 auto 2em;
    padding: 1em 2em;
    max-width: 920px;
`;

const Name = styled.span`
    color: #D9335B;
`;

const First = styled.span`
    color: #D9335B;
    font-size: 1em
    font-weight: bold;
    text-transform: uppercase;
    &:before {
        content: "/ ";
    }
`;
export default () => (
    <Container>
        
        <Navigation>
            <Link to="/"> {"<"} Takaisin etusivulle </Link>
        </Navigation>
        <SubPageContainer>
                <TekstiOsa>
                    <SubPageHeader>
                        <p>Rakennemuutos maakunnassa on suuri ja sen vaikutukset ovat merkittäviä <Name>Tehyläiselle</Name> henkilöstölle.</p>
                    <p>Kymenlaakson <Name>Tehy Rake -ryhmä</Name> ja ammattiosastojen puheenjohtajisto, sekä lm:t tsv:t kokoontuvat säännöllisesti yhdessä tai pj:t erikseen. Samoin muiden ammattijärjestöjen tapaamiset ovat säännöllisiä, neuvottelijat heidän kanssa ovat Tehyltä <Name>Eija Lantta</Name>, <Name>Asta Nurminen</Name> ja <Name>Marja-Riitta Mänttäri</Name>.</p>
                    </SubPageHeader>
            
                    <MainText>
                    <h3>Rake-ryhmän tehtäviä:</h3>
            
                    <p><First>Taata</First> henkilöstön laaja osallistuminen valmistelutyöryhmiin, tehdä valinnat, tukea Tehyläisiä edustajia, tehdä verkosto / yhteistyötä muiden ao:n ja ammattijärjestöjen kesken. </p>
                    <p><First>Järjestää</First> erilaisia tapaamisia, tehdä suunnitelmia ja ennakoivasti vaikuttaa muutoksen vaikutuksiin Tehyläiseen jäsenistöön liittyen.</p>
                    <p><First>Tehdä</First> lausuntoja ja kannanottoja, noudattaen Tehyn lausuntojen sisältöä.</p>
                    <p><First>Vaikuttaa</First> henkilöstöedustuksen kautta valmisteluelimien työhön.</p>
                    <p><First>Tarkentaa</First> neuvottelutavoitteita. </p>
                    <p><First>Valvoa</First> YT toteutumista liikkeenluovutukseen liittyen. </p>
                    <p><First>On mukana</First> vaikuttamassa / päättämässä paikallistensopimusten ja muiden eri työnantajien kesken sovittujen käytänteiden siirtymisestä (tärkeydestä / tarpeesta jäsenistöömme liittyen).</p>
                    <p><First>Valvoa</First> ja vaikuttaa palkkaharmonisointi asiaan</p>
                    <p><First>Tiedottaa</First> jäsenistölle</p>
                    <p><First>Huolehtia</First> lm ja tsv organisoitumisen käynnistymisestä </p>
                    </MainText>
                </TekstiOsa>
        </SubPageContainer>
        <Navigation>
            <Link to="/"> {"<"} Takaisin etusivulle </Link>
        </Navigation>
 </Container>

);