import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { dispensariesData } from '../../data/dispensaries.js'
import iconmarker from '../../img/icon-marker.png'
import styled from 'styled-components'

const Mapbox = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.763846, 
    longitude:  -122.454666,
    width: '100vw',
    height: 'calc(100vh - 222px)',
    zoom: 12
  })

  const [selectedMarker, setSelectedMarker] = useState(null)

  console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    <MapBoxStyles>
      <ReactMapGL 
        {...viewport }
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport)=>{setViewport(viewport)}}
        mapStyle='mapbox://styles/mattclagett/ckimqd3c41bhj17od32owf4mm'
      >
        {dispensariesData.map((dispensary) => (
          <Marker key={dispensary.id} latitude={dispensary.latitude} longitude={dispensary.longitude}>
            <img src={iconmarker}  onClick={e=> {
                e.preventDefault()
                setSelectedMarker(dispensary)
              }}  alt=""/>
          </Marker>
        ))}

        {selectedMarker ? (
          <Popup latitude={selectedMarker.latitude} longitude={selectedMarker.longitude} onClose={()=>setSelectedMarker(null)}>
            <div>This is a marker.</div>
          </Popup>
        ) : null}
        <div className='results'>
          <div className="results__header">
            <div className="results__header-title">Showing results 1-61</div>
            <div className="results__header-sort">
              Sort by <i className="fas fa-angle-down"></i>
            </div>
          </div>
          <div className="results__results">
            {dispensariesData.map((dispensary)=>(
              <div className="result">
                <div className="result__content">
                  <img src={dispensary.image} alt=""/>
                  <div className="result__text">
                    <div className="result__title">{dispensary.name}</div>
                    <div className="result__rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className='avg-rating'>{dispensary.averageRating}</span>
                      <span className='num-ratings'>({dispensary.numRatings})</span>
                    </div>
                    <div className="result__types">
                      {dispensary.types.join(" ⦁ ")}
                    </div>
                    <div className="result__tags">
                      {dispensary.tags.map(tag => (
                        <span className='tag'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="result__button">
                  <div className="button">View Menu</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReactMapGL>
    </MapBoxStyles>
  )
}

export default Mapbox


const MapBoxStyles = styled.div`
  position: relative;
  width: 100%;
  img {
    cursor: pointer;
    height: 26px;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.4);
    }
  }

  .results {
    background: white;
    position: absolute;
    width: 375px;
    top: 2rem;
    bottom: 2rem;
    border-radius: 4px;
    left: 2rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem 0px;
    height: auto;
    overflow: hidden;
    transform: none !important;

    &__header {
      display: flex;
      align-items: center;
      background: #f2f5f5;
      height: 48px;
    }

    &__header-title {
      text-align: center;
      width: 50%;
      font-weight: bold;
      font-size: 14px;
      color: #333;
      user-select: none;
    }

    &__header-sort {
      text-align: right;
      padding-right: 20px;
      width: 50%;
      font-size: 14px;
      .fas {
        margin-left: 5px;
      }
    }

    &__results {
      height: calc(100% - 46px);
      overflow-x: none;
      overflow-y: scroll;
    }

    .result {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 200px;
      width: 100%;
      border-bottom: 1px solid #ddd;
      

      img {
        padding: 10px;
        width: 76px;
        height: auto;
      }
    
      .num-ratings,
      .avg-rating {
        margin-left: 5px;
      }

      &__content {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        overflow: wrap;
      }

      &__text {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }

      &__title {
        font-weight: 600;
        color: rgb(37, 41, 53);
        font-size: 16px;
        margin-bottom: 4px;

      }

      &__rating {
        font-size: 14px;
        margin-bottom: 4px;
        .fas {
          color: #f5ab24;
        }
      }
      
      &__types {
        font-size: 14px;
        color: rgb(96, 100, 111);
        margin-bottom: 4px;
        .type {
          font-size: 14px;
        }
      }
      
      &__tags {
        display: flex;
        flex-wrap: wrap;
        .tag {
          font-size: 12px;
          color: #333;
          font-weight: 600;
          background: rgb(230, 229, 229);
          border-radius: 0.1875rem;
          color: rgb(37, 41, 53);
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.00625rem;
          margin: 0px 0.25rem 0.25rem 0px;
          padding: 0px 0.25rem;
          white-space: nowrap;
        }
      }

      &__button{
        display: flex;
        justify-content: center;
        text-align: center;
        
        .button {
          display: flex;
          justify-content: center;
          width: 80%;
          color: rgb(74, 74, 74);
          border-radius: 0.1875rem;
          border: 0.0625rem solid rgb(204, 204, 204);
          padding: 0px 1rem;
          display: flex;
          align-items: center;
          font-weight: 600;
          height: 2.5rem;
          cursor: pointer;
          font-size: 14px;

          &:hover {
            color: #00A8A3;
          }
        }
      }
    }
  }
`