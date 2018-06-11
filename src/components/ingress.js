import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
const Ing = styled.div`
    background-color: #364f74;
    color: #009dab;
    text-shadow: 0px 2px 2px #222;
    padding: 2em 2em 2em;
    margin-bottom: 6em;
    border-bottom: 3px solid #009dab;
    
`;

const Right = styled.div`
    
    
      border-right: 3px solid #009dab;
    
    
    & p {
        font-weight: bold;
        font-size: 2em;
        t
        padding-top: 0.5em;
        // border-top: 1px solid #009dab;
        // border-bottom: 1px solid #009dab;
    }
    & div {
        font-size: 0.8em;
        color: white;
        
    }

    @media (max-width: 720px) {
        border: none;
    }
`;

const Left = styled.div`
    padding: 6.5em 0 0 3em;;
    color: white;
    font-size: 1.2em;
    
    & h3{
        font-weight: bold;
        
        text-decoration: underline;
        color: #09c3a0;
    }
`;

const Button = styled.button`
    background-color: #009dab;
    display: inline-block;
    font-size: 0.7em;
    font-weight: bold;
    padding: 0.2em 2em;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 2px #222;
    vertical-align: base-line;
    color: #ddd;
    &:hover {
        box-shadow: 0px 1px 1px #222;
    }
`;
const Ingress = ({}) => (
    <Ing className="grid grid-gutters ">
        <Right className="grid-cell ">
            <p>Muutos. Tulevaisuus. Tehyläisyys.</p>
            <div>Tämä on Tehyn Kymenlaakson alueen ammattiosastojen yhteinen muutosinfo</div>
    </Right>
        <Left className="grid-cell ">
            <h3>RAKE-ryhmä?</h3>
            <p>Alueellinen rakennemuutos- eli RAKE-ryhmä, jonka keskeisenä tehtävänä on selvittää muutoksen vaikutukset tehyläisiin ja vastata niihin. Ryhmän tehtävänä on sopia ja valita edustajia työryhmiin, joissa henkilöstöä koskevia asioita käsitellään.</p> 
            <Link to="/rake/"><Button>LUE LISÄÄ</Button></Link>
    </Left>
    
    
</Ing>

);


export default Ingress;