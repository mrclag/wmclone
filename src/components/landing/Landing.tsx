import React from 'react'
import styled from 'styled-components'
import { CardRow } from '../cards/CardRow'
import Carousel from '../Carousel'
import CovidMessage from './CovidMessage'

const imgUrls = [
  "https://images.weedmaps.com/creatives/000/013/460/graphic/original/1607366415-112420_CRTV-3642_WMxKokoNuggz-Desktop_2251x844.png?bg=%23000000&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2Mi9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTgta29rb251Z3oucG5nP2Rwcj0zJmg9NDAw&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEzLzQ2MS9ncmFwaGljL29yaWdpbmFsLzE2MDczNjY0MTctdGVtcGZpbGUyMDIwMTIwNy0zMzAtMXAxenRxbD9kcHI9MyZ3PTE0NDA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/868/graphic/original/1605663203-2600x750_Lifted_spirits_for_less.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg3MC9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDUtMTAwMHgxMDAwLUxpZnRlZF9zcGlyaXRzX2Zvcl9sZXNzLnBuZz9kcHI9MyZoPTQwMA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzg2OS9ncmFwaGljL29yaWdpbmFsLzE2MDU2NjMyMDQtdGVtcGZpbGUyMDIwMTExOC00Mi0xdHFndTFiP2Rwcj0zJnc9MTQ0MA&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440",
  "https://images.weedmaps.com/creatives/000/010/721/graphic/original/1605642548-2600x750-Cozy_up_with_some_bud.png?bg=None&blend-align=right&blend-mode=normal&blend-pad=60&blend64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMy9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTEtMTAwMHgxMDAwLUNvenlfdXBfd2l0aF9zb21lX2J1ZC5wbmc_ZHByPTMmaD00MDA&dpr=3&fit=crop&h=400&mark-align=left%2Cmiddle&mark-x=0&mark64=aHR0cHM6Ly9pbWFnZXMud2VlZG1hcHMuY29tL2NyZWF0aXZlcy8wMDAvMDEwLzcyMi9ncmFwaGljL29yaWdpbmFsLzE2MDU2NDI1NTAtdGVtcGZpbGUyMDIwMTExNy01NC1nNXp3NDQ_ZHByPTMmdz0xNDQw&mark_params%5Bdpr%5D=3&mark_params%5Bw%5D=1440&q=100&w=1440"
]


interface LandingProps {}

export const Landing: React.FC<LandingProps> = () => {
  return (
    <LandingStyles>
      <CovidMessage/>
      <Carousel images={imgUrls} size="medium"/>
      <CardRow type="Featured brands" buttons={{viewAll: true}}/>
      <CardRow type="Dispensary services" buttons={{viewAll: true, map: true}}/>
      <CardRow type="Delivery services" buttons={{viewAll: true, leftright: true}}/>
      <CardRow type="Dispensary storefronts" buttons={{viewAll: true}}/>
      <CardRow type="Deals nearby" buttons={{viewAll: true}}/>
      <CardRow type="Doctors" buttons={{viewAll: true}}/>
    </LandingStyles>
  )
}


const LandingStyles = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 95px;

  .landing-wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0 auto;
  }

`