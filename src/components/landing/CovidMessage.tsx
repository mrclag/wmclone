import React, { useContext} from 'react'
import styled from 'styled-components'
import { StoreContext } from '../../stores/DisplayStore'
import { useObserver } from "mobx-react-lite"



interface CovidMessageProps {
}
interface CovidMessageStyleProps {
  display: boolean;
}

const CovidMessage: React.FC<CovidMessageProps> = () => {
  const store = useContext(StoreContext)
  if(store === null) throw new Error()



  return useObserver(()=>(
    <CovidMessageStyles display={store.displayCovidMessage}>
      <div className="message-wrapper">
       <div className="message">
        <strong>COVID-19</strong>:{' '}
        <span>
          stay safe by ordering online for delivery or curbside pickup, where available.
        </span>
       </div>
       <div className="message-exit" onClick={store.exitCovidMessage}>
         <i className="fas fa-times"/>
       </div>
      </div>
    </CovidMessageStyles>
  ))
}
export default CovidMessage

const CovidMessageStyles = styled.div`
  height: 50px;
  background: #FA943E;
  width: 100%;
  margin: 0 auto;
  display: ${(props: CovidMessageStyleProps) => props.display ? 'true' : 'none'};

  .message-wrapper {
    display: flex;
    padding-left: 0.5rem;
    flex-direction: row;
    height: 100%;
    max-width: 75rem;
    margin: 0px auto;
    color: white;
    line-height: 50px;
    justify-content: space-between;
  }

  .message {
    font-size: 0.875rem;
    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .message-exit {
    cursor: pointer;
    font-size: 16px;
  }
`