import React, { memo } from 'react'
import './Card.css'
import placeHolderImage from '../../Assets/spaceship_placeholder.png'
const Card = ({
  imageUrl,
  missionId,
  launchYear,
  launch,
  landing,
  flightNumber,
  missionName,
}) => {
  const id = missionId.map((id, index) => <p key={`${index} ${id}`}>{id}</p>)

  return (
    <article className='space-card'>
      <div className='img-box'>
        <img
          src={!imageUrl ? placeHolderImage : imageUrl}
          alt={`${missionName} Spaceship`}
          loading='lazy'
          width='auto'
          height='auto'
        />
      </div>
      <div className='space-card-container'>
        <div className='space-card-details'>
          <span className='missionName'>{missionName}</span>
          <span className='flightNumber'> #{flightNumber}</span>
        </div>
        <div className='space-card-details'>
          <span>Mission Ids:</span>
          <p>{missionId.length ? id : 'No Id'}</p>
        </div>
        <div className='space-card-details'>
          <span>Launch Year:</span>
          <p>{launchYear}</p>
        </div>
        <div className='space-card-details'>
          <span>Successful Launch:</span>
          <p>{`${launch}`}</p>
        </div>
        <div className='space-card-details'>
          <span>Successful Landing:</span>
          <p>
            {landing === null
              ? 'No Record'
              : landing === false
              ? 'false'
              : 'true'}
          </p>
        </div>
      </div>
    </article>
  )
}

export default memo(Card)
