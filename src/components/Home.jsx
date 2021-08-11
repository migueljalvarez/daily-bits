import React from 'react'
import { TextHeader, ContainerCategories, LogoImg, Categories } from '../styles/styleHome'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <main>
                <TextHeader>
                    Practica tus conocimientos en la categoria que prefieras.
                </TextHeader>
                <ContainerCategories>
                    <Categories id="html" to="/questions/html" >
                        <LogoImg id="html-image" src="../assets/svg/html.svg" alt="html" />
                        <p>HTML</p>
                    </Categories>
                </ContainerCategories>
                <ContainerCategories>
                    <Categories id="css" to="/questions/css" >
                        <LogoImg id="css-image" src="../assets/svg/css.svg" alt="css" />
                        <p>CSS</p>
                    </Categories>
                    <Categories id="js" to="/questions/js">
                        <LogoImg id="js-image" src="../assets/svg/js.svg" alt="js" />
                        <p>JS</p>
                    </Categories>
                </ContainerCategories>
            </main>

            <Footer />
        </div>

    )
}

export default Home
