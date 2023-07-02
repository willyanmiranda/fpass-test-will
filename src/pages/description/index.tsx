import React from 'react'
import Header from '../../components/header'
import DescriptionCharacter from '../../components/DescriptionCharacter'
import { MainWrapper, App, AppBody, AppContent } from './style'

const Description = () => {
  return (
    <MainWrapper>
        <App>
            <Header />
            <AppBody>
                <AppContent> 
                    <DescriptionCharacter />
                </AppContent>
            </AppBody>
        </App>
    </MainWrapper>
  )
}

export default Description